import { ROUTES } from '../router/RouterConfig';
import { NavItem } from "./NavItem";

// FIXME: Recreate algorithm taking nested routes into account

export function Nav() {
    const NavItems = ROUTES[0].children.map(({ path, title }) => {
        return <NavItem key = { title } path = { `${ path }` } title = { title }/>; 
    });

    return (
        <nav>
            { NavItems }
        </nav>
    );
}