import { Box, Heading } from "@chakra-ui/layout";

import { WideCard } from "../../components/Cards";

import { wideCards } from '../../resources';

export function Intervalos() {
    return(
        <Box> 
            <Heading variant="title"> Intervalos </Heading>
            <WideCard {...wideCards.TEMPLATE} />
        </Box>
    )
}