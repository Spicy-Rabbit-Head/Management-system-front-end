import {ref} from "vue";
// 菜单栏状态 (false展开 true收起)

const menuStatus = ref<boolean>(false);

export function useMenu() {


    return {
        menuStatus,
    }
}