import { ROUTES } from '../router/RouterConfig';
import NavItem from "./NavItem";

function Nav() {
    const NavItems = ROUTES.map(({ path, title }) => {
        return <NavItem key = { title } path = { `${ path }` } title = { title }/>; 
    });

    return (
        <nav>
            <NavItem path = '/' title = 'testHome'/>
            { NavItems }
        </nav>
    );
}
export default Nav