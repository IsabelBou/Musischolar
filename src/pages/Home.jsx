import { Box, Heading } from "@chakra-ui/layout";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

// TODO: Add actual content

function Home() {
    return(
        <Box> 
            <Heading> Welcome </Heading>
            <br />
            Add site explanation here
            <br /><br />
            Content:
            <br />
            <ChakraLink as = { ReactRouterLink } to = '/LenguajeMusical'>Lenguaje Musical</ChakraLink>
            <br />
            <ChakraLink as = { ReactRouterLink } to = '/Armonia'>Armonía</ChakraLink>
        </Box>
    )       // TODO: Algorithm for page content mapping
}

export default Home