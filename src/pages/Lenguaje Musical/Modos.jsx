import { Box, Heading } from "@chakra-ui/react";
import { List, ListItem, ListIcon } from '@chakra-ui/react';

import { CustomCard, WideCard } from "../../components/Cards";
import { scores as s } from "../../resources/scores";

{/* Iconos */}
import { FaRegArrowAltCircleUp as Up, FaRegArrowAltCircleDown as Down } from "react-icons/fa";
import { MdOutlineStart as Start } from "react-icons/md";
import { IoMdKey as Key } from "react-icons/io";
import { PiWavesBold as Approx } from "react-icons/pi";

// TODO: Review modal transportation

export function Modos() {
    return(
        <Box> 
            <Heading variant="title"> Modos </Heading>

            {/* JÓNICO */}
            <WideCard title="Jónico">
                <CustomCard score={s.MODES.JONICO} title="1º">
                <List>
                <ListItem>
                        <ListIcon as = { Start } color="teal.400"/>
                        Escala desde Do
                    </ListItem>
                </List>
                </CustomCard>
                <CustomCard score={s.EQMODES.JONICO} title="Tonalidad Mayor">
                <List>
                    <ListItem>
                        <ListIcon as = { Approx } color="gray.400" />
                        Equivalente a Tonalidad Mayor
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Key } color="yellow.500"/>
                        Do Mayor 🡆 0♮
                    </ListItem>
                </List>
                </CustomCard>
            </WideCard>

            {/* DÓRICO */}
            <WideCard title="Dórico">
                <CustomCard score={s.MODES.DORICO} title="2º">
                <List>
                <ListItem>
                        <ListIcon as = { Start } color="teal.400"/>
                        Escala desde Re
                    </ListItem>
                </List>
                </CustomCard>
                <CustomCard score={s.EQMODES.DORICO} title="T. menor + VI↑">
                <List>
                    <ListItem>
                        <ListIcon as = { Approx } color="gray.400" />
                        Equivalente a tonalidad menor
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Key } color="yellow.500"/>
                        Re menor 🡆 1♭
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Up } color='comp_green.600' />
                        VI alterado ascendentemente
                    </ListItem>
                </List>
                </CustomCard>
            </WideCard>

            {/* FRIGIO */}
            <WideCard title="Frigio">
                <CustomCard score={s.MODES.FRIGIO} title="3º">
                <List>
                <ListItem>
                        <ListIcon as = { Start } color="teal.400"/>
                        Escala desde Mi
                    </ListItem>
                </List>
                </CustomCard>
                <CustomCard score={s.EQMODES.FRIGIO} title="T. menor + II↓">
                <List>
                    <ListItem>
                        <ListIcon as = { Approx } color="gray.400" />
                        Equivalente a tonalidad menor
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Key } color="yellow.500"/>
                        Mi menor 🡆 1♯
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Down } color='triad_orange.600' />
                        II alterado descendentemente
                    </ListItem>
                </List>
                </CustomCard>
            </WideCard>

            {/* LIDIO */}
            <WideCard title="Lidio">
                <CustomCard score={s.MODES.LIDIO} title="4º">
                <List>
                <ListItem>
                        <ListIcon as = { Start } color="teal.400"/>
                        Escala desde Fa
                    </ListItem>
                </List>
                </CustomCard>
                <CustomCard score={s.EQMODES.LIDIO} title="T. Mayor + IV↑">
                <List>
                    <ListItem>
                        <ListIcon as = { Approx } color="gray.400" />
                        Equivalente a Tonalidad Mayor
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Key } color="yellow.500"/>
                        Fa Mayor 🡆 1♭
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Up } color='comp_green.600' />
                        IV alterado ascendentemente
                    </ListItem>
                </List>
                </CustomCard>
            </WideCard>

                {/* MIXOLIDIO */}
                <WideCard title="Mixolidio">
                <CustomCard score={s.MODES.MIXOLIDIO} title="5º">
                <List>
                <ListItem>
                        <ListIcon as = { Start } color="teal.400"/>
                        Escala desde Sol
                    </ListItem>
                </List>
                </CustomCard>
                <CustomCard score={s.EQMODES.MIXOLIDIO} title="T. Mayor + VII↓">
                <List>
                    <ListItem>
                        <ListIcon as = { Approx } color="gray.400" />
                        Equivalente a Tonalidad Mayor
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Key } color="yellow.500"/>
                        Sol Mayor 🡆 1♯
                    </ListItem>
                    <ListItem>
                    <ListIcon as = { Down } color='triad_orange.600' />
                        VII alterado descendentemente
                    </ListItem>
                </List>
                </CustomCard>
            </WideCard>

                {/* EÓLICO */}
                <WideCard title="Eólico">
                <CustomCard score={s.MODES.EOLICO} title="6º">
                <List>
                <ListItem>
                        <ListIcon as = { Start } color="teal.400"/>
                        Escala desde La
                    </ListItem>
                </List>
                </CustomCard>
                <CustomCard score={s.EQMODES.EOLICO} title="Tonalidad menor">
                <List>
                    <ListItem>
                        <ListIcon as = { Approx } color="gray.400" />
                        Tonalidad menor sin sensible
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Key } color="yellow.500"/>
                        La menor 🡆 0♮
                    </ListItem>
                </List>
                </CustomCard>
            </WideCard>

            {/* LOCRIO */}
            <WideCard title="Locrio">
                <CustomCard score={s.MODES.LOCRIO} title="7º">
                <List>
                <ListItem>
                        <ListIcon as = { Start } color="teal.400"/>
                        Escala desde Si
                    </ListItem>
                </List>
                </CustomCard>
                <CustomCard score={s.EQMODES.LOCRIO} title="T. menor + II↓ + V↓">
                <List>
                    <ListItem>
                        <ListIcon as = { Approx } color="gray.400" />
                        Equivalente a tonalidad menor
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Key } color="yellow.500"/>
                        Si menor 🡆 2#
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Down } color='triad_orange.600' />
                        II y V alterados descendentemente
                    </ListItem>
                </List>
                </CustomCard>
            </WideCard>
        </Box>
    )
}