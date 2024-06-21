import { SimpleGrid, Card, CardHeader, CardBody, Box } from '@chakra-ui/react'
import { CustomCard, WideCard, ParallelCards } from '../components/Cards';
import { singleCards, wideCards, parallelCards } from '../resources';

import { List, ListItem, ListIcon } from '@chakra-ui/react';

{/* Iconos */}
import { FaRegArrowAltCircleUp as Up, FaRegArrowAltCircleDown as Down } from "react-icons/fa";
import { MdOutlineStart as Start, MdOutlinePiano as Piano } from "react-icons/md";
import { IoMdKey as Key } from "react-icons/io";
import { PiWavesBold as Approx } from "react-icons/pi";

export function TestContent() {
    return (
        <Box> 
            {/* Cards with JSX in description */}
            <CustomCard {...singleCards.TEMPLATE}>
                <List>
                    <ListItem>
                        <ListIcon as = { Up } color='comp_green.600' />
                        Alteración Ascendente
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Down } color='triad_orange.600' />
                        Alteración Descendente
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Start } color="teal.400"/>
                        Nota inicial
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Piano } color="gray.500"/>
                        Equivalencia Tonal
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Key } color="yellow.500"/>
                        Armadura de la equivalencia
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { Approx } color="gray.400" />
                        Aproximación
                    </ListItem>
                </List>
            </CustomCard>
            
            {/* Composite Cards */}
            <Card variant='double'>
                <CardHeader>
                    Double Card
                </CardHeader>
                <CardBody>
                    <WideCard {...wideCards.TEMPLATE} />
                    <ParallelCards {...parallelCards.TEMPLATE} />
                </CardBody>
            </Card>

            { /* Stand-alone cards */ }
            <Card> Outside Grid Test </Card>
            <SimpleGrid>
                <CustomCard {...singleCards.TEMPLATE}/>
                <CustomCard {...singleCards.TEMPLATE}/>
                <Card> Inside Grid Test </Card>
            </SimpleGrid>
        </Box>
    )
}