import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

// TODO: Style links

const NavItem = (props) => {
    const { path, title } = props;

    return(
        <ChakraLink as = { ReactRouterLink } to = { `${ path }` }> { title } </ChakraLink>
    )
}
export default NavItem
