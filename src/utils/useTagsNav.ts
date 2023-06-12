import {TabsData} from '@/type/interface'
import {reactive, ref} from "vue";
// 全局共享标签导航数据
const tabsData: Array<TabsData> = reactive<Array<TabsData>>([
        {
            id: 0,
            label: '首页',
        },
        {
            id: 1,
            label: '标签1',
        }
    ]
)
const wrapper = ref<HTMLDivElement | null>(null)
const currentTag = ref<number | null>(null)

export function useTagsNav() {
    // 删除标签
    function deleteTag(id: number) {
        tabsData.splice(id, 1)
    }

    // 添加标签
    function addTag(tab: TabsData) {
        let i = tabsData.length
        tabsData.push(tab)
        tagStateChange(i)
    }

    // 功能触发器
    function functionTrigger() {

    }

    // 标签状态改变
    function tagStateChange(index: number) {
        if (currentTag.value !== null) {
            tabsData[currentTag.value].state = ''
        }
        currentTag.value = index
        tabsData[index].state = 'tw-text-blue-500'
    }

    // 路由触发
    function routeTrigger(tab: string) {
        let i: number = 0
        if (tabsData.find((item) => {
            i = item.id
            return item.label === tab
        })) {
            tagStateChange(i)
            return
        }
        addTag({id: tabsData.length, label: tab})
    }


    return {
        wrapper,
        tabsData,
        deleteTag,
        routeTrigger,
        functionTrigger
    }
}