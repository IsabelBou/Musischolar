import { Box, Heading } from "@chakra-ui/layout";

import { wideCard} from '../../resources/constants';

import WideCard from '../../components/Cards/WideCard';


function Modos() {
    return(
        <Box> 
            <Heading> Modos </Heading>
            <br />
            <WideCard {...wideCard.MODOS.JONICO} />
            <WideCard {...wideCard.MODOS.DORICO} />
            <WideCard {...wideCard.MODOS.FRIGIO} />
            <WideCard {...wideCard.MODOS.LIDIO} />
            <WideCard {...wideCard.MODOS.MIXOLIDIO} />
            <WideCard {...wideCard.MODOS.EOLICO} />
            <WideCard {...wideCard.MODOS.LOCRIO} />
        </Box>
    )
}

export default Modos