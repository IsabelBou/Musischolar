import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Accordion } from '@chakra-ui/react';
import VerovioRenderer from './Verovio';

const customCard = () => {
    return (
        <Card>
            <CardHeader>
                <Accordion allowToggle allowMultiple>
                    <AccordionItem border='none'> {/*TODO: Figure out how to add border: none to the theme's AccordionItem*/}                    
                        <AccordionButton >
                            <Box flex='1' textAlign='center'>
                                Title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            More Information
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </CardHeader>
            <CardBody>
                <VerovioRenderer/>
            </CardBody>
        </Card>
    )
}

export default customCard;