import { SimpleGrid, Card, Box } from '@chakra-ui/react'
import CustomCard from '../components/Cards/CustomCard';
import DoubleCardH from '../components/Cards/DoubleCardH';
import DoubleCardV from '../components/Cards/DoubleCardV';
import { cards } from '../resources/constants';

function TestContent() {
    return (
        <Box> 
            <Card> Test </Card>
            <DoubleCardH />
            <DoubleCardV />
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