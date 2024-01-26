import { SimpleGrid, Card, Box } from '@chakra-ui/react'
import CustomCard from '../components/CustomCard';
import DoubleCard from '../components/DoubleCard';
import { cards } from '../resources/constants';

function TestContent() {
    return (
        <Box> 
            <Card> Test </Card>
            <DoubleCard />
            <SimpleGrid
            spacing = {4} 
            columns = {{ base: 1, sm: 1, md: 2 }}> {/* If screen about the size of a phone (portrait), 1 column. Otherwise, 2 of them*/}
                <CustomCard {...cards.TEMPLATE}/>
                <CustomCard {...cards.TEMPLATE}/>
                <CustomCard {...cards.TEMPLATE}/>
                <CustomCard {...cards.TEMPLATE}/>
                <Card> Test </Card>
            </SimpleGrid>
        </Box>
    )
}

export default TestContent