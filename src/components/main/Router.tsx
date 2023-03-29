import RouterProps from "./RouterProps";

export const Router = (props: RouterProps) => {
    return props.navigationSpec.get(props.subpage)!.getComponent();
}

export default Router;