import { TabsData } from '@/types/shared.ts'
import { computed, CSSProperties, getCurrentInstance, reactive, ref } from "vue";
// 全局共享标签导航数据
const tagsData = reactive<Array<TabsData>>([
        {
            label: '首页',
            path: '/h0',
            state: 'tw-text-blue-500'
        },
    ]
)
// 当前实例
const instance = getCurrentInstance();
// 滑动条DOM
const tagsWrapper = ref<HTMLDivElement[] | null>(null)
// 标签容器DOM
const tagWrapper = ref<HTMLDivElement[] | null>(null)
// 当前标签
const currentTag = ref<number>(0)
// 标签滑动位置
const translateX = ref<number>(0);

// 导出闭包方法
export function useTagsNav() {
    // 计算属性
    // 标签滑动位置
    const getTabStyle = computed((): CSSProperties => {
        return {
            transform: `translateX(${translateX.value}px)`
        };
    });

    // 滑动
    function tagsScroll(offset: number) {
        // 可视化宽度
        let scrollbarWidth = tagsWrapper.value ? tagsWrapper.value[0].offsetWidth : 0;
        // 标签总宽度
        let tagWidth = tagWrapper.value ? tagWrapper.value[0].offsetWidth : 0;
        // 向左滑动
        if (offset > 0) {
            translateX.value = Math.min(0, translateX.value + offset);
        } else {
            // 标签总宽度大于可视化宽度向右滑动
            if (scrollbarWidth < tagWidth) {
                if (translateX.value >= -(tagWidth - scrollbarWidth)) {
                    translateX.value = Math.max(translateX.value + offset, scrollbarWidth - tagWidth);
                }
            }
            // 标签总宽度小于可视化宽度不滑动
            else {
                translateX.value = 0
            }
        }
    }

    // 移动到标签视图
    function moveToView(route: any) {
        let index = tagsData.findIndex(item => {
            return route.path === item.path;
        });
        // let tabNavPadding = 10;
        if (!instance?.refs["dynamic" + index]) return;

    }

    // 删除标签
    function deleteTag(id: number) {
        if (currentTag.value === id) {
            currentTag.value = id - 1
            tagsData[currentTag.value].state = 'tw-text-blue-500'
        } else {
            currentTag.value -= 1
        }
        tagsData.splice(id, 1)
    }

    // 添加标签
    function addTag(tab: TabsData) {
        tagsData.push(tab)
        tagStateChange(tagsData.length - 1)
    }

    // 功能触发器
    function functionTrigger(index: number) {
        if (tagsWrapper.value) {
            switch (index) {
                case 0 :
                    tagsScroll(300)
                    break;
                case 2 :
                    tagsScroll(-300)
                    break;
                case 3 :
                    console.log('下拉菜单');
            }
        }
    }


    // 标签状态改变
    function tagStateChange(index: number) {
        tagsData[currentTag.value].state = ''
        currentTag.value = index
        tagsData[index].state = 'tw-text-blue-500'
    }

    // 路由触发
    function routeTrigger(tab: string, meta: any) {
        console.log(meta)
        let i: number = tagsData.findIndex((item) => {
            return item.label === tab
        })
        if (i === -1) {
            addTag({label: tab, path: meta.path, state: ''})
            return
        }
        tagStateChange(i)
    }

    return {
        tagsWrapper,
        tagWrapper,
        tagsData,
        getTabStyle,
        tagsScroll,
        deleteTag,
        routeTrigger,
        functionTrigger,
        moveToView
    }
}