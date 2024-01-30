import { Card, CardHeader } from '@chakra-ui/react';
import CustomCard from './CustomCard';
import { SimpleGrid } from '@chakra-ui/react';

const WideCard = (props) => {
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

export default WideCard;