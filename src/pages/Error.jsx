import { SimpleGrid , Heading, Text } from "@chakra-ui/react";

export function Error() {
    return(
        <SimpleGrid columns={1} spacing={20}> 
            <Heading fontSize="6xl" > Oops! </Heading>
            
            <Text>
                Something did not go as expected; either go back to the landing page or try again later.
            </Text>
        </SimpleGrid>
    )
}