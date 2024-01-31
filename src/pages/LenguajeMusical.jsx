import { Box, Heading } from "@chakra-ui/layout";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link } from "@chakra-ui/react";
// import { Card, CardHeader, CardBody } from '@chakra-ui/react'
// import WideCard from '../components/Cards/WideCard';
// import ParallelCards from '../components/Cards/ParallelCard';
// import { wideCard, parallelCards } from '../resources/constants';

function LenguajeMusical() {
    return(
        <Box> 
            <Heading> Lenguaje Musical </Heading>
            <br />
            <Link as = { ReactRouterLink } to = "nested"> Nested Page </Link>
        </Box>
    )
}

export default LenguajeMusical