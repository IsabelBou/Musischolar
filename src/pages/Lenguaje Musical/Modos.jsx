import { Box, Heading } from "@chakra-ui/layout";

import { WideCard } from "../../components/Cards";

import { wideCards } from '../../resources';

// TODO: Review modal transportation
// TODO: Redo page with CustomizableCard and directly add information in page instead of referencing resources data (except for scores)

export function Modos() {
    return(
        <Box> 
            <Heading variant="title"> Modos </Heading>
            <WideCard {...wideCards.MODOS.JONICO} />
            <WideCard {...wideCards.MODOS.DORICO} />
            <WideCard {...wideCards.MODOS.FRIGIO} />
            <WideCard {...wideCards.MODOS.LIDIO} />
            <WideCard {...wideCards.MODOS.MIXOLIDIO} />
            <WideCard {...wideCards.MODOS.EOLICO} />
            <WideCard {...wideCards.MODOS.LOCRIO} />
        </Box>
    )
}