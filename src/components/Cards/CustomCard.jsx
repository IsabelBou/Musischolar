import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Accordion } from '@chakra-ui/react';
import { Player } from '../Verovio';

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
                <Player score = { score }/>
            </CardBody>
        </Card>
    )
}