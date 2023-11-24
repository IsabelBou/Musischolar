import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Accordion } from '@chakra-ui/react';
import Player from './MidiPlayer';

const customCard = (props) => {
    const { title, description, score } = props;
    return (
        <Card minW='md'>
            <CardHeader>
                <Accordion allowToggle allowMultiple>
                    <AccordionItem border='none'> {/*//TODO: Figure out how to add border: none to the theme's AccordionItem*/}                    
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
                <Player score = { score }/>
            </CardBody>
        </Card>
    )
}

export default customCard;