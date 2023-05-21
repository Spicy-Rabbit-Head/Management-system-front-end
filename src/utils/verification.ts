import {create, eager, enforce, only, test} from "vest";
import {LoginPinia} from "@/store";
import {Toast} from "vexip-ui";

function verificationRegister(code: number): boolean {
    let result;
    let traversal;
    if (code == 0) {
        traversal = LoginPinia().FormRegister
    } else {
        traversal = LoginPinia().FormLogin
    }
    for (let prop in traversal) {
        result = suite(traversal, prop)
        if (result.hasErrors(prop)) {
            Toast.warning({
                content: result.getErrors(prop)[0],
                showMask: true,
            })
            return false
        }
    }
    suite.reset()
    return true
}

const suite = create((data = {}, currentField) => {
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
export {verificationRegister}