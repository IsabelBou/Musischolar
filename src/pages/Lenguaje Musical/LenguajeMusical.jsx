import { Box, Heading } from "@chakra-ui/layout";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link } from "@chakra-ui/react";

function LenguajeMusical() {
    return(
        <Box> 
            <Heading> Lenguaje Musical </Heading>
            <br />
            <Link as = { ReactRouterLink } to = "Modos"> Modos </Link>
        </Box>
    )       // TODO: Algorithm for page content mapping
}

export default LenguajeMusical