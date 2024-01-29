import { SimpleGrid, Card, CardHeader, CardBody, Box } from '@chakra-ui/react'
import CustomCard from '../components/Cards/CustomCard';
import WideCard from '../components/Cards/WideCard';
import ParallelCards from '../components/Cards/ParallelCard';
import { cards, wideCard, parallelCards } from '../resources/constants';

function TestContent() {
    return (
        <Box> 
            {/* Composite Cards */}
            <Card variant='double'>
                <CardHeader>
                    Double Card
                </CardHeader>
                <CardBody>
                    <WideCard {...wideCard.TEMPLATE} />
                    <ParallelCards {...parallelCards.TEMPLATE} />
                </CardBody>
            </Card>
            { /*Stand-alone cards*/ }
            <Card> Outside Grid Test </Card>
            <SimpleGrid
            spacingX = {4} 
            columns = {{ base: 1, sm: 1, md: 2 }}> {/* If screen about the size of a phone (portrait), 1 column. Otherwise, 2 of them*/}
                <CustomCard {...cards.TEMPLATE}/>
                <CustomCard {...cards.TEMPLATE}/>
                <Card> Inside Grid Test </Card>
            </SimpleGrid>
        </Box>
    )
}

export default TestContent