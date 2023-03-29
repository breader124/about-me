export default interface NavigationBundle {
    sectionName: string
    getComponent: () => JSX.Element
    getIcon: () => JSX.Element
}