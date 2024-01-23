import { showNotification } from "@/utils/componentPlugins";
import { useUser } from "@/hooks/useUser.ts";
import { login, register } from "@/api/userManagement.ts";
import { useFullScreenLoading } from "@/hooks/useFullScreenLoading.ts";

const {FullScreenLoadingRun} = useFullScreenLoading();
const {userForm} = useUser()

/**
 * 验证登录表单
 * @param mode 是否验证密码对比
 * @returns 是否验证成功
 * @version 1.0
 * @since 2023-10-17 15:59
 */
export function verificationUserForm(mode: boolean): void {
  let from = userForm
  if (isEmpty(from.username) || isEmpty(from.password)) {
    showNotification('错误', "用户名或密码不能为空");
    return;
  } else if (matches(from.username, /\s/) || matches(from.password, /\s/)) {
    showNotification('错误', "用户名或密码不能有空格");
    return;
  } else if (notMatches(from.username, /^[a-zA-Z0-9]+$/) || notMatches(from.password, /^[a-zA-Z0-9]+$/)) {
    showNotification('错误', "用户名或密码不能有特殊字符");
    return;
  }
  if (mode) {
    if (notEquals(from.repeatPassword, from.password)) {
      showNotification('错误', "密码校验不相等");
      return;
    }
    console.log("注册验证通过")
    register();
    return;
  }
  console.log("登录验证通过")
  FullScreenLoadingRun();
  login()
}

type Nullish<T = void> = Nullable<T> | Maybe<T>;

type Nullable<T> = T | null;

type Maybe<T> = T | undefined | void;

/**
 * 绑定不<br>
 * 将函数返回值取反
 * @param fn 函数
 * @version 1.0
 * @since 2023-10-17 10:37
 */
function bindNot<T extends (...args: any[]) => unknown>(fn: T) {
  return (...args: Parameters<T>): boolean => !fn(...args)
}

/**
 * 拥有属性
 * @param obj 对象
 * @param key 键
 * @returns 是否拥有属性
 * @version 1.0
 * @since 2023-10-17 10:44
 */
function hasOwnProperty<T>(obj: T, key: string | number | symbol): key is keyof T {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

/**
 * 判断是否为对象
 * @param value 值
 * @returns 是否为对象
 * @version 1.0
 * @since 2023-10-17 11:12
 */
function isObject(value: any): value is Record<any, any> {
  return typeof value === 'object' && !isNullAndUndefined(value);
}

/**
 * 判断是否为null
 * @param value 值
 * @returns 是否为null
 * @version 1.0
 * @since 2023-10-17 11:21
 */
export function isNull(value: unknown): value is null {
  return value === null;
}

/**
 * 判断是否为undefined
 * @param value 值
 * @returns 是否为undefined
 * @version 1.0
 * @since 2023-10-17 11:22
 */
function isUndefined(value?: unknown): value is undefined {
  return value === undefined;
}

/**
 * 判断是否为null或undefined
 * @param value 值
 * @returns 是否为null或undefined
 * @version 1.0
 * @since 2023-10-17 11:27
 */
export function isNullAndUndefined(value: any): value is Nullish {
  return isNull(value) || isUndefined(value);
}

/**
 * 判断是否为NaN
 * @param value 值
 * @returns 是否为NaN
 * @version 1.0
 * @since 2023-10-17 10:27
 */
function isNaN(value: unknown): boolean {
  return Number.isNaN(value);
}

/**
 * 判断是否为数字
 * @param value 值
 * @returns 是否为数字
 * @version 1.0
 * @since 2023-10-17 10:50
 */
export function isNumeric(value: string | number): boolean {
  let str = String(value);
  let num = Number(value);
  return Boolean(!isNaN(parseFloat(str)) && !isNaN(Number(value)) && isFinite(num))
}

/**
 * 数字等于
 * @param value 值
 * @param eq 等于
 * @returns 是否等于
 * @version 1.0
 * @since 2023-10-17 11:07
 */
function numberEquals(value: string | number, eq: string | number): boolean {
  return isNumeric(value) && isNumeric(eq) && Number(value) === Number(eq)
}

/**
 * 长度等于
 * @param value 值
 * @param arg 长度
 * @returns 是否等于
 * @version 1.0
 * @since 2023-10-17 10:45
 */
function lengthEquals(value: string | unknown[], arg: string | number): boolean {
  return numberEquals(value.length, arg);
}

/**
 * 判断是否为字符串
 * @param value 值
 * @returns 是否为字符串
 * @version 1.0
 * @since 2023-10-17 15:44
 */
function isString(value: unknown): value is string {
  return String(value) === value;
}

/**
 * 判断是否为空
 * @param value 值
 * @returns 是否为空
 * @version 1.0
 * @since 2023-10-17 15:37
 */
export function isEmpty(value: unknown): boolean {
  if (!value) {
    return true
  } else if (hasOwnProperty(value, 'length')) {
    return lengthEquals(value as string | unknown[], 0);
  } else if (isObject(value)) {
    return lengthEquals(Object.keys(value as Record<string, unknown>), 0);
  }
  return false
}

/**
 * 判断是否不为空
 * @param value 值
 * @returns 是否不为空
 * @version 1.0
 * @since 2023-10-17 15:37
 */
export const isNotEmpty = bindNot(isEmpty);

/**
 * 判断值是否包含正则表达式匹配项
 * @param value 值
 * @param regex 正则表达式
 * @returns 是否包含正则表达式匹配项
 * @version 1.0
 * @since 2023-10-17 15:46
 */
export function matches(value: string, regex: RegExp | string): boolean {
  if (regex instanceof RegExp) {
    return regex.test(value);
  } else if (isString(regex)) {
    return new RegExp(regex).test(value);
  }
  return false;
}

/**
 * 判断值是否不包含正则表达式匹配项
 * @param value 值
 * @param regex 正则表达式
 * @returns 是否不包含正则表达式匹配项
 * @version 1.0
 * @since 2023-10-17 15:47
 */
export const notMatches = bindNot(matches);

/**
 * 判断值是否等于
 * @param value 值
 * @param arg 判断值
 * @returns 是否等于
 * @version 1.0
 * @since 2023-10-17 15:48
 */
export function equals(value: unknown, arg: unknown): boolean {
  return value === arg;
}

/**
 * 判断值是否不等于
 * @param value 值
 * @param arg 判断值
 * @returns 是否不等于
 * @version 1.0
 * @since 2023-10-17 16:33
 */
export const notEquals = bindNot(equals);
