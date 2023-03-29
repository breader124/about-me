import React, {useState} from 'react';
import {
    ActionIcon,
    AppShell,
    Center,
    ColorScheme,
    ColorSchemeProvider,
    Container,
    Footer,
    Group,
    Header,
    MantineProvider,
    Navbar,
    Text
} from "@mantine/core";
import {Article, InfoCircle, Man, Moon, Network, Sun} from "tabler-icons-react";
import NavigationBundle from "./components/navigation/NavigationBundle";
import Name from "./components/utils/Name";
import Introduction from "./components/subpage/Introduction";
import EmploymentHistory from "./components/subpage/EmploymentHistory";
import Articles from "./components/subpage/Articles";
import About from "./components/subpage/About";
import Navigation from "./components/navigation/Navigation";
import Router from "./components/main/Router";

const navSections = new Map<string, NavigationBundle>([
    [
        "0",
        {
            sectionName: "Introduction",
            getComponent: () => <Introduction/>,
            getIcon: () => <Man/>
        }
    ],
    [
        "1",
        {
            sectionName: "Employment history",
            getComponent: () => <EmploymentHistory/>,
            getIcon: () => <Network/>
        }
    ],
    [
        "2",
        {
            sectionName: "Articles",
            getComponent: () => <Articles/>,
            getIcon: () => <Article/>
        }
    ],
    [
        "3",
        {
            sectionName: "About this page",
            getComponent: () => <About/>,
            getIcon: () => <InfoCircle/>
        }
    ]
]);

export const App = () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    const [chosenSubpage, chooseSubpage] = useState("0");

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
                <AppShell
                    header={
                        <Header height={50}>
                            <Group sx={{height: '100%'}} px={20} position="apart">
                                <Name/>
                                <ActionIcon variant="default" title={"Change theme"} onClick={() => toggleColorScheme()}
                                            size={30}>
                                    {colorScheme === 'dark' ? <Sun size="1rem"/> : <Moon size="1rem"/>}
                                </ActionIcon>
                            </Group>
                        </Header>
                    }
                    navbar={
                        <Navbar width={{base: "20%"}} height={"100vw"} p={"lg"}>
                            <Navigation sections={navSections} chooseSection={chooseSubpage}/>
                        </Navbar>
                    }
                    footer={
                        <Footer height={50}>
                            <Center h={"100%"} mx="auto">
                                <Text color={"dimmed"} size={"sm"}>
                                    © 2023, Adrian Chlebosz. All rights reserved.
                                </Text>
                            </Center>
                        </Footer>
                    }
                >
                    <Container maw={"100%"}>
                        <Router subpage={chosenSubpage} navigationSpec={navSections}/>
                    </Container>
                </AppShell>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
