import { Box } from "@chakra-ui/react";
import { AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Accordion } from '@chakra-ui/react';
import { NavLink as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { useColorModeValue  } from "@chakra-ui/react";

function NavAccordion ({path, title, children}) {
    const bgColor = useColorModeValue('primary.100', 'primary.600'); // (light mode, dark mode)

    return(
        <Accordion allowMultiple textAlign='left'>
            <AccordionItem border='none'>
                <AccordionButton fontSize='1.2rem' _hover = {{ bg: `${bgColor}` }}>
                    <Box as="span" flex='1' textAlign='left'>
                        <ChakraLink as = { ReactRouterLink } to = { `${ path }` }>
                            { title } 
                        </ChakraLink>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                    {children} 
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default NavAccordion