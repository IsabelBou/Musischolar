import { Box, Heading } from "@chakra-ui/layout";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link } from "@chakra-ui/react";

export function Armonia() {
    return(
        <Box> 
            <Heading variant="title"> Armonía </Heading>
            <br />
            <Link as = { ReactRouterLink } to = "nested"> Nested Page </Link>
        </Box>
    )       
}