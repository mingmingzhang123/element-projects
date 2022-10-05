export default {
    // 开启独立命名空间
    namespaced: true,
    state: {
        // 当前选择的标签页
        editableTabsValue: "home",
        //   数据源
        editableTabs: [{
                title: "首页",
                name: "home"
            },

        ],
    },
    mutations: {
        getTags(state) {
            const tags = sessionStorage.getItem("tags")
            if (tags) {
                state.editableTabs = JSON.parse(tags)
            }


        },
        addeditableTabs(state, data) {
            // 看一下数据源中有没有当前要添加的数据
            if (data.name === 'undenfind') return
            const index = state.editableTabs.findIndex(item => item.name === data.name)
            // 如果没有就添加进去
            if (index === -1) {
                state.editableTabs.push(data)
            }
            // 并让当前标签选择新添加的标签
            state.editableTabsValue = data.name
            sessionStorage.setItem("tags", JSON.stringify(state.editableTabs))
        },
        // 当当前标签页发生改变就实时更新
        EditTabs(state, val) {
            state.editableTabsValue = val

        },
        closeTags(state, data) {
            state.editableTabs = data

        }
    }
}