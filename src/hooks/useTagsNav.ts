import {TabsData} from '@/type/interface'
import {computed, CSSProperties, reactive, ref} from "vue";
// 全局共享标签导航数据
const tagsData: Array<TabsData> = reactive<Array<TabsData>>([
        {
            label: '首页',
            state: 'tw-text-blue-500'
        },
    ]
)
// 滑动条DOM
const tagsWrapper = ref<HTMLDivElement | null>(null)
// 标签容器DOM
const tagWrapper = ref<HTMLDivElement | null>(null)
// 当前标签
const currentTag = ref<number>(0)
// 标签滑动位置
const translateX = ref<number>(0);

export function useTagsNav() {
    // 标签滑动位置
    const getTabStyle = computed((): CSSProperties => {
        return {
            transform: `translateX(${translateX.value}px)`
        };
    });


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
                    scroll(300)
                    break;
                case 2 :
                    scroll(-300)
                    break;
                case 3 :
                    console.log('下拉菜单');
            }
        }
        console.log(translateX.value)
    }

    // 滑动
    function scroll(offset: number) {
        // 可视化宽度
        let scrollbarWidth = tagsWrapper.value ? tagsWrapper.value.offsetWidth : 0;
        // 标签总宽度
        let tagWidth = tagWrapper.value ? tagWrapper.value.offsetWidth : 0;
        console.log(scrollbarWidth, tagWidth, offset)
        if (offset > 0) {
            translateX.value = Math.min(0, translateX.value + offset);
        } else {
            if (scrollbarWidth < tagWidth) {
                if (translateX.value >= -(tagWidth - scrollbarWidth)) {
                    translateX.value = Math.max(translateX.value + offset, scrollbarWidth - tagWidth);
                }
            } else {
                translateX.value = 0
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
    function routeTrigger(tab: string) {
        let i: number = tagsData.findIndex((item) => {
            return item.label === tab
        })
        if (i === -1) {
            addTag({label: tab, state: ''})
            return
        }
        tagStateChange(i)
    }

    return {
        tagsWrapper,
        tagWrapper,
        tagsData,
        getTabStyle,
        deleteTag,
        routeTrigger,
        functionTrigger
    }
}