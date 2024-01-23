import { get } from "@/api/requestInstance.ts";

/**
 * 获取表单结构
 * @param {string} formName 表单名称
 */
export function GetFormStructure(formName: string) {
  return get("formStructure/getByFormName", {formName: formName});
}
