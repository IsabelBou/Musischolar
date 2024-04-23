import { Link as ReactRouterLink } from 'react-router-dom'
import { Link } from "@chakra-ui/react";
import { Box, Heading, } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/react";
import { ROUTES } from './router/RouterConfig';


export function ContentFinder (props) {
    const {section} = props;
    const Links = ROUTES[0].children.find(({ title }) => title === section).children.map(({ title }) => {
        if (title != section)
        return (<Link key = { title } as = { ReactRouterLink } to = { title }>{ title }</Link>)
    });

    return(
        <Box> 
            <Heading variant="title">{ section }</Heading>
            <SimpleGrid columns={1}>
                { Links }
            </SimpleGrid>
        </Box>
    )
}