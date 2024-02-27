import { SimpleGrid, Card, CardHeader, CardBody, Box } from '@chakra-ui/react'
import { CustomCard, WideCard, ParallelCards } from '../components/Cards';
import { singleCards, wideCards, parallelCards } from '../resources';

export function TestContent() {
    return (
        <Box> 
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
            { /*Stand-alone cards*/ }
            <Card> Outside Grid Test </Card>
            <SimpleGrid>
                <CustomCard {...singleCards.TEMPLATE}/>
                <CustomCard {...singleCards.TEMPLATE}/>
                <Card> Inside Grid Test </Card>
            </SimpleGrid>
        </Box>
    )
}