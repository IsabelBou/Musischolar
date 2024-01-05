import { Box } from "@chakra-ui/layout";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

function TestHome() {
    return(
        <Box> 
            Home
            <ChakraLink as = { ReactRouterLink } to = '/test'>TestContent </ChakraLink>
        </Box>
        
    )
}

export default TestHome