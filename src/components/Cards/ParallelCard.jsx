import { Card, CardHeader } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { CustomCard } from './index.js';

export const ParallelCards = (props) => {
    const { left, right } = props;
    const LeftCards = left.cards.map(({title, description, score}) =>{
        return <CustomCard key = { title } title = { title } description = { description } score = { score }  />
    });
    const RightCards = right.cards.map(({title, description, score}) =>{
        return <CustomCard key = { title } title = { title } description = { description } score = { score }  />
    });

    return (
        <SimpleGrid>
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