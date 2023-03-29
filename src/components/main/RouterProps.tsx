import NavigationBundle from "../navigation/NavigationBundle";

export default interface RouterProps {
    subpage: string,
    navigationSpec: Map<string, NavigationBundle>
}