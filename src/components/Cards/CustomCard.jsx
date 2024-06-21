import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Accordion } from '@chakra-ui/react';
import { Display } from '../Music';

export const CustomCard = ({title, score, children, description}) => {
    return (
        <Card variant='accordionSingle'>
            <CardHeader>
                <Accordion allowMultiple>
                    <AccordionItem border='none'>                  
                        <AccordionButton >
                            <Box flex='1' textAlign='center'>
                                { title }
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            { description }
                            { children }
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