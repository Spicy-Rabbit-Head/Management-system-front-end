import {ref} from "vue";

// 全屏加载状态
const fullScreenLoadingState = ref<boolean>(false);

export function useFullScreenLoading() {
    // 启动全屏加载
    function FullScreenLoadingRun() {
        fullScreenLoadingState.value = true;
    }

    // 关闭全屏加载
    function FullScreenLoadingStop() {
        fullScreenLoadingState.value = false;
    }

    return {
        fullScreenLoadingState,
        FullScreenLoadingRun,
        FullScreenLoadingStop
    }
}