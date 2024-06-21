import { Box, Heading, Text } from "@chakra-ui/layout";
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useColorModeValue  } from "@chakra-ui/react";
    
export function Home() {
    const link = useColorModeValue('primary.500', 'primary.300');

    return(
        <Box> 
            <Heading variant="title" mb="8"> Welcome! </Heading>
            <Text>
                This project intends to be an interactive repository for my conservatory notes, and as such is a work in progress.
            </Text>
            <Text>
                Despite the interface controls being in English, the content itself, save from this page, is currently only available in Spanish. In the future, there may be an option to switch languages.
            </Text>
            <Text>
                {`You can read more information by checking the projects' github repository`+' '}
                <ChakraLink color={link} href='https://github.com/IsabelBou/Musischolar' isExternal>
                    here
                </ChakraLink>
                .
            </Text>
            <Text>
                Please bear in mind that some of the content sections or its pages may be either incomplete or just placeholders.
            </Text>
            <Text fontSize={"2xl"} mt="12">
                Content sections:
            </Text>
            <ChakraLink as = { ReactRouterLink } to = '/LenguajeMusical'>Lenguaje Musical</ChakraLink>
            <br />
            <ChakraLink as = { ReactRouterLink } to = '/Armonia'>Armonía</ChakraLink>
        </Box>
    )
}