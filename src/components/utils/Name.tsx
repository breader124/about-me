import {Group} from "@mantine/core";
import {
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
    LetterZ
} from "tabler-icons-react";
import React from "react";

export const Name = () => {
    return <Group sx={{height: '100%'}} spacing="xl">
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
    </Group>;
}

export default Name;