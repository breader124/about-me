import {Button, Stack} from "@mantine/core";
import {NavigationProps} from "./NavigationProps";

export const Navigation = (props: NavigationProps) => {
    const entries = Array.from(props.sections.entries());
    const chooseSection = props.chooseSection;

    return (
        <Stack>
            {entries.map((entry) => {
                const [key, section] = entry;
                const getIcon: () => JSX.Element = props.icons.get(key)!;

                return (
                    <Button leftIcon={getIcon()} variant={"light"} key={key} onClick={() => chooseSection(key)}>
                        {section}
                    </Button>
                );
            })}
        </Stack>
    );
}

export default Navigation;