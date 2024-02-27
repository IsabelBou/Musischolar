import { Card, CardHeader } from '@chakra-ui/react';
import { CustomCard } from './index.js';
import { SimpleGrid } from '@chakra-ui/react';

export const WideCard = (props) => {
    const { title, right, left } = props;
    return (
        <Card variant='group'>
            <CardHeader>
                {title}
            </CardHeader>
            <SimpleGrid>
                <CustomCard { ...left } />
                <CustomCard { ...right } />
            </SimpleGrid>
        </Card>
    )
}