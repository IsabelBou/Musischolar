import { Box, Heading } from "@chakra-ui/layout";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link } from "@chakra-ui/react";

function Armonia() {
    return(
        <Box> 
            <Heading> Armonía </Heading>
            <br />
            <Link as = { ReactRouterLink } to = "nested"> Nested Page </Link>
        </Box>
    )       // TODO: Algorithm for page content mapping
}

export default Armonia