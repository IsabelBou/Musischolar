import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Accordion } from '@chakra-ui/react';
import VerovioRenderer from './Verovio';
import PlayPauseToggle from './PlayPauseToggle';

const customCard = (props) => {
    const {url} = props;
    return (
        <Card minW='md'>
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
                <VerovioRenderer url = { url }/>
                <PlayPauseToggle />
            </CardBody>
        </Card>
    )
}

export default customCard;