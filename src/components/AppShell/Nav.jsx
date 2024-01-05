import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

function Nav() {
    return (
        <nav>
            <ChakraLink as = { ReactRouterLink } to = '/'> TestHome </ChakraLink>
            <ChakraLink as = { ReactRouterLink } to = '/test'> TestContent </ChakraLink>
            <ChakraLink as = { ReactRouterLink } to = '/error'> TestError </ChakraLink>
        </nav>
    );
}

export default Nav