import { Card, CardBody, CardHeader } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';

const DoubleCardH = (props) => {
    const { title } = props;
    return (
        <Card variant='double'>
            <CardHeader>
                Double Card{ title }
            </CardHeader>
            <CardBody>
                <Card variant='group'>
                    <CardHeader>
                        Row 1
                    </CardHeader>
                    <SimpleGrid spacingX = {4} columns = {{ base: 1, sm: 1, md: 2 }}>
                        <Card variant='accordionSingle'> Test 1 </Card>
                        <Card variant='accordionSingle'> Test 2 </Card>
                    </SimpleGrid>
                </Card>
            </CardBody>
        </Card>
    )
}

export default DoubleCardH;