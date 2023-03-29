import {Button, Stack} from "@mantine/core";
import NavigationProps from "./NavigationProps";

export const Navigation = (props: NavigationProps) => {
    const entries = Array.from(props.sections.entries());
    const chooseSection = props.chooseSection;

    return (
        <Stack>
            {entries.map((entry) => {
                const [key, bundle] = entry;
                const sectionName = bundle.sectionName;
                const getIcon = bundle.getIcon;

                return (
                    <Button leftIcon={getIcon()} variant={"light"} key={key} name={sectionName} onClick={() => chooseSection(key)}>
                        {sectionName}
                    </Button>
                );
            })}
        </Stack>
    );
}

export default Navigation;