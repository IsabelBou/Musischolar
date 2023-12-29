/* A "layout route" is a good place to put markup you want to share across all the pages on your site, like navigation. */

import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

function Layout() {
    return (
        <nav>
            <ChakraLink as = { ReactRouterLink } to = '/'> TestHome </ChakraLink>
            <ChakraLink as = { ReactRouterLink } to = '/content'> TestContent </ChakraLink>
            <ChakraLink as = { ReactRouterLink } to = '/error'> TestError </ChakraLink>
        </nav>
    );
}

export default Layout