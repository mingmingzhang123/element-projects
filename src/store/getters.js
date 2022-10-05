export default {
    // 导出isCollapse展开收起的状态
    isCollapse: state => state.Menu.isCollapse,
    menuList: state => state.Menu.menuList,
    editableTabsValue: state => state.Tags.editableTabsValue,
    editableTabs: state => state.Tags.editableTabs
}