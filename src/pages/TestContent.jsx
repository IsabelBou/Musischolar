import { SimpleGrid, Card, CardHeader, CardBody, Box } from '@chakra-ui/react'
import { CustomCard, WideCard, ParallelCards, CustomizableCard } from '../components/Cards';
import { singleCards, wideCards, parallelCards } from '../resources';

import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaRegArrowAltCircleUp as Up, FaRegArrowAltCircleDown  } from "react-icons/fa";

export function TestContent() {
    return (
        <Box> 
            {/* Cards with JSX in description */}
            <CustomizableCard {...singleCards.TEMPLATE}>
                <List>
                    <ListItem display="flex" justifyContent = "center" alignItems = "center">
                        <ListIcon as = { Up } color='comp_green.600' />
                        Listed Item 1
                    </ListItem>
                    <ListItem>
                        <ListIcon as = { FaRegArrowAltCircleDown } color='triad_orange.600' />
                        Listed Item 2
                    </ListItem>
                </List>
            </CustomizableCard>
            
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