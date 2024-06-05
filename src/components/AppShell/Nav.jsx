import { NavItem } from "./NavItem";
import NavAccordion from './NavAccordion';

export function Nav(props) {
    const { routes } = props;
    const parentPath = routes.path;
    const NavItems = routes.children.map(({ path, title, children }) => {
        if (children){
            return (
            <NavAccordion key = { title } path = { `${ path }` } title = { title }>
                <Nav routes = {{ path: parentPath + path, title, children }} />
            </NavAccordion>)
        }
        else if (path != '' && path != '*') 
            return (
            <NavItem key = { title } path = { `${ parentPath + '/' + path }` } title = { title }/>
        )
    });

    return (
        <nav>
            { NavItems }
        </nav>
    );
}