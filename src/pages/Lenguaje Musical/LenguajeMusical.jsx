import { Box, Heading } from "@chakra-ui/layout";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link } from "@chakra-ui/react";

export function LenguajeMusical() {
    return(
        <Box> 
            <Heading variant="title"> Lenguaje Musical </Heading>
            <br />
            <Link as = { ReactRouterLink } to = "Modos"> Modos </Link>
        </Box>
    )       // TODO: Algorithm for page content mapping, like Nav
}