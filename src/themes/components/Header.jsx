import { Flex, Center } from '@chakra-ui/react'
//Box, Text, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Stack, Center
import  Toggle  from './ModeToggle'
import ToneSelector from './ToneSelector'
import TempoSelector from './TempoSelector'

//TODO: Fix header to absolute top (Or side) of viewport.
    //position="fixed" top='0' left='0' got something similar to what I was looking for.


const Header = () => {
    return (
        <Flex zIndex={2} width='100%' alignItems={'center'} justifyContent={'space-between'}>
            <Center>
                <Toggle />
            </Center>
            <Center>
                <ToneSelector />
            </Center>
            <Center>
                <TempoSelector />
            </Center>
        </Flex>
    )
}

export default Header;