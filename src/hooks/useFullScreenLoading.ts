import {ref} from "vue";

// 全屏加载状态
const fullScreenLoading = ref<boolean>(false);

export function useFullScreenLoading() {
    // 启动全屏加载
    function FullScreenLoadingRun() {
        fullScreenLoading.value = true;
    }

    // 关闭全屏加载
    function FullScreenLoadingStop() {
        fullScreenLoading.value = false;
    }

    return {
        fullScreenLoading,
        FullScreenLoadingRun,
        FullScreenLoadingStop
    }
}