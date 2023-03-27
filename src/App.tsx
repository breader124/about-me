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
import Navigation from "./components/navigation/Navigation";
import Router from "./components/main/Router";
import {
    Article,
    InfoCircle,
    LetterA,
    LetterB,
    LetterC,
    LetterD,
    LetterE,
    LetterH,
    LetterI,
    LetterL,
    LetterN,
    LetterO,
    LetterR,
    LetterS,
    LetterZ,
    Man,
    Moon,
    Network,
    Sun
} from "tabler-icons-react";

const navSections = new Map<string, string>([
    ["0", "Introduction"],
    ["1", "Employment history"],
    ["2", "Articles"],
    ["3", "About this page"]
]);

const navIcons = new Map<string, () => JSX.Element>([
    ["0", () => <Man/>],
    ["1", () => <Network/>],
    ["2", () => <Article/>],
    ["3", () => <InfoCircle/>]
])

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
                                <Group sx={{height: '100%'}} spacing="xl">
                                    <Group sx={{height: '100%'}} spacing="0">
                                        <LetterA size={36}/>
                                        <LetterD size={36}/>
                                        <LetterR size={36}/>
                                        <LetterI size={36}/>
                                        <LetterA size={36}/>
                                        <LetterN size={36}/>
                                    </Group>
                                    <Group sx={{height: '100%'}} spacing="0">
                                        <LetterC size={36}/>
                                        <LetterH size={36}/>
                                        <LetterL size={36}/>
                                        <LetterE size={36}/>
                                        <LetterB size={36}/>
                                        <LetterO size={36}/>
                                        <LetterS size={36}/>
                                        <LetterZ size={36}/>
                                    </Group>
                                </Group>
                                <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                                    {colorScheme === 'dark' ? <Sun size="1rem"/> : <Moon size="1rem"/>}
                                </ActionIcon>
                            </Group>
                        </Header>
                    }
                    navbar={
                        <Navbar width={{base: "20%"}} height={"100vw"} p={"lg"}>
                            <Navigation sections={navSections} icons={navIcons} chooseSection={chooseSubpage}/>
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
                        <Router subpage={chosenSubpage}/>
                    </Container>
                </AppShell>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
