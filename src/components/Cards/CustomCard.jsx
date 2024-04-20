import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Accordion } from '@chakra-ui/react';
import { Display } from '../Music';

//TODO: Enable description to be passed as another component

export const CustomCard = (props) => {
    const { title, description, score } = props;
    return (
        <Card variant='accordionSingle'>
            <CardHeader>
                <Accordion allowMultiple>
                    <AccordionItem border='none'>                  
                        <AccordionButton >
                            <Box flex='1' textAlign='center'>
                                {title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            {description}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </CardHeader>
            <CardBody>
                <Display score = { score }/>
            </CardBody>
        </Card>
    )
}