import { Card, CardHeader } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';

export const WideCard = ({title, children}) => {
    return (
        <Card variant='group'>
            <CardHeader>
                {title}
            </CardHeader>
            <SimpleGrid>
                { children [0] }
                { children [1] }
            </SimpleGrid>
        </Card>
    )
}