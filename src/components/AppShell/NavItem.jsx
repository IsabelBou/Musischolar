import { Box, Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { useColorModeValue  } from "@chakra-ui/react";

export const NavItem = (props) => {
    const bgColor = useColorModeValue('primary.100', 'primary.600'); // (light mode, dark mode)
    const { path, title } = props;

    return(
        <Box>
            <ChakraLink as = { ReactRouterLink } to = { `${ path }` }>
                <Flex align = "center" p="2" mx="4" borderRadius = "md" cursor = "pointer"
                    _hover = {
                        { bg: `${bgColor}`,
                        transitionDuration: '0.4s',
                        transitionTimingFunction: "ease-in-out",
                        }
                    } >
                    { title }
                </Flex>
            </ChakraLink>
        </Box>
    )
}