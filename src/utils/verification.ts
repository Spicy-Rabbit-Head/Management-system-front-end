import { create, eager, enforce, only, test } from "vest";
import { showToast } from "@/utils/componentPlugins";
import { useUser } from "@/hooks/useUser.ts";

const {userForm} = useUser()

// 验证注册登录表单
function verificationRegister(code: number): boolean {
    let result;
    let traversal = userForm
    for (let prop in traversal) {
        if (code) if (prop === 'repeatPassword') continue
        result = userAuthentication(traversal, prop)
        if (result.hasErrors(prop)) {
            showToast(result.getErrors(prop)[0])
            return false
        }
    }
    userAuthentication.reset()
    return true
}

// 注册登录表单验证实例
const userAuthentication = create((data = {}, currentField) => {
    only(currentField)
    eager()

    test('username', '用户名不能为空', () => {
        enforce(data.username).isNotEmpty();
    });

    test('username', '用户名不能存在空格字符串', () => {
        enforce(data.username).notMatches(/\s/)
    });

    test('username', '用户名不能有特殊字符', () => {
        enforce(data.username).matches(/^[a-zA-Z0-9]+$/)
    });

    test('password', '密码不能为空', () => {
        enforce(data.password).isNotEmpty();
    });

    test('password', '密码不能存在空格字符串', () => {
        enforce(data.password).notMatches(/\s/)
    });

    test('repeatPassword', '密码校验不相等', () => {
        enforce(data.repeatPassword).equals(data.password);
    });
})


// 全局验证实例
const globalVerification = create((data = {}, currentField) => {

})

export { verificationRegister }

