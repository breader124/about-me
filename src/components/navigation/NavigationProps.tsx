export interface NavigationProps {
    sections: Map<string, string>,
    icons: Map<string, () => JSX.Element>
    chooseSection: (option: string) => void
}