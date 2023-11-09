import { Box,  AccordionButton, AccordionIcon, AccordionPanel, Flex, Card, CardBody, CardHeader, Heading, Center, AccordionItem, Accordion,  } from '@chakra-ui/react';

const customCard = () => {
    return (
        <Flex position="relative">
        <Center>
            <Card>
                <CardHeader>
                    <Heading>
                    <Accordion allowToggle allowMultiple border='none'>
                        <AccordionItem border='none'>
                            <AccordionButton>
                                <Box as="relative" flex='1' textAlign='center'>
                                    Title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                More Information
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    </Heading>
                </CardHeader>
                <CardBody>
                    Verovio
                </CardBody>
            </Card>
        </Center>
        </Flex>
    )
}

export default customCard;