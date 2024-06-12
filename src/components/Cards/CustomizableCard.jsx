import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Accordion } from '@chakra-ui/react';
import { Display } from '../Music';

export const CustomizableCard = ({title, score, children}) => {
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