import {RouterProps} from "./RouterProps";
import About from "../subpage/About";
import Introduction from "../subpage/Introduction";
import EmploymentHistory from "../subpage/EmploymentHistory";
import Articles from "../subpage/Articles";

export const Router = (props: RouterProps) => {
    switch (props.subpage) {
        case "0": return <Introduction/>
        case "1": return <EmploymentHistory/>
        case "2": return <Articles/>
        case "3": return <About/>
    }

    return (
        <>Impossible</>
    )
}

export default Router;