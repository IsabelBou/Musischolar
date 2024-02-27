import { ButtonGroup, Link } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Flex, Heading } from '@chakra-ui/react'
import { useColorModeValue  } from "@chakra-ui/react";

import { ModeToggle, MenuButton, ToneSelector, TempoSelector } from '../Buttons';

export const Header = (props) => {
    const bgColor = useColorModeValue('analog500.100', 'analog500.900'); // (light mode, dark mode)
    const { onOpen } = props; // Clicking the Menu Button triggers sidebar drawer on above component

    return (
        <Flex bg= {`${bgColor}`}
            paddingX = {4}
            height = "20"
            alignItems = "center"
            justifyContent = "space-between">
            <MenuButton onOpen = { onOpen } />
            <Heading fontWeight = "bold" justifyContent = "center">
                <Link as = { ReactRouterLink } to = "/">
                    Musischolar
                </Link>
            </Heading>
            <ButtonGroup display='flex' justifyContent='space-between'>
                <ToneSelector />
                <TempoSelector />
                <ModeToggle />
            </ButtonGroup>
        </Flex>
    )
}

export default Header;