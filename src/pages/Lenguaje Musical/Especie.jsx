import { Box, Heading } from "@chakra-ui/layout";
import { List, ListItem, ListIcon } from '@chakra-ui/react';

import { CustomCard } from "../../components/Cards";
import { scores as s } from "../../resources/scores";

{/* Iconos */}
import { FaRegArrowAltCircleUp as Up, FaRegArrowAltCircleDown as Down } from "react-icons/fa";
import { FaRegCircleXmark as Dim } from "react-icons/fa6";

// TODO: Correct diminished display in MEI (should display slashed 5)
// TODO: Correct playback (chords should play at the same time)

export function Especie() {
    return(
        <Box> 
            <Heading variant="title"> Especie de acordes</Heading>
            <Heading fontSize="x" mb="5" > 🔨 Work in progress </Heading>
            <CustomCard score={s.QUALITY.MAJOR} title="Tonalidad Mayor">
                <List>
                    <ListItem>
                        <ListIcon as = { Up } color="comp_green.600"/>
                        Grados mayores: I, IV, V
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Down } color="yellow.500"/>
                        Grados menores: II, III, VI
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Dim } color="triad_orange.600"/>
                        Grados disminuidos: VII
                    </ListItem>
                </List>
            </CustomCard>
        </Box>
    )
}