import { Card, CardHeader } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import CustomCard from './CustomCard';

const ParallelCards = (props) => {
    const { left, right } = props;
    const LeftCards = left.cards.map(({title, description, score}) =>{
        return <CustomCard key = { title } title = { title } description = { description } score = { score }  />
    });
    const RightCards = right.cards.map(({title, description, score}) =>{
        return <CustomCard key = { title } title = { title } description = { description } score = { score }  />
    });

    return (
        <SimpleGrid
        spacingX = {4}
        columns = {{ base: 1, sm: 1, md: 2 }}> {/* If screen about the size of a phone (portrait), 1 column. Otherwise, 2 of them*/}
            <Card variant='group'>
                <CardHeader>
                    {left.title}
                </CardHeader>
                { LeftCards }
            </Card>
            <Card variant='group'>
                <CardHeader>
                    {right.title}
                </CardHeader>
                { RightCards }
            </Card>
        </SimpleGrid>

    )
}

export default ParallelCards;