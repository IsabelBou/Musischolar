import { Box, Heading } from "@chakra-ui/layout";

import { WideCard } from "../../components/Cards";

import { wideCards } from '../../resources';

export function Intervalos() {
    return(
        <Box> 
            <Heading variant="title"> Intervalos </Heading>
            <Heading fontSize="x" mb="5" > 🔨 Work in progress </Heading>
            <WideCard {...wideCards.TEMPLATE} />
        </Box>
    )
}