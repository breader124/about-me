import NavigationBundle from "./NavigationBundle";

export default interface NavigationProps {
    sections: Map<string, NavigationBundle>,
    chooseSection: (option: string) => void
}