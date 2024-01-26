import { Card, CardBody, CardHeader } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';

const doubleCard = (props) => {
    const { title } = props;
    return (
        <Card variant='double'>
            <CardHeader>
                Double Card{ title }
            </CardHeader>
            <CardBody>
                <SimpleGrid
                spacingX = {4}
                columns = {{ base: 1, sm: 1, md: 2 }}> {/* If screen about the size of a phone (portrait), 1 column. Otherwise, 2 of them*/}
                    <Card variant='column'>
                        <CardHeader>
                            Column 1
                        </CardHeader>
                        <Card variant='accordionSingle'> Test 1 </Card>
                        <Card variant='accordionSingle'> Test 2 </Card>
                    </Card>
                    <Card variant='column'>
                        <CardHeader>
                            Column 2
                        </CardHeader>
                        <Card variant='accordionSingle'> Test 3 </Card>
                        <Card variant='accordionSingle'> Test 4 </Card>
                    </Card>
                </SimpleGrid>
            </CardBody>
        </Card>
    )
}

export default doubleCard;