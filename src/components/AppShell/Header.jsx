import { ButtonGroup } from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import ModeToggle  from '../ModeToggle'
import ToneSelector from '../ToneSelector'
import TempoSelector from '../TempoSelector'
import MenuButton from '../MenuButton'


// IMPROVE: Fix header to absolute top of viewport.
    // position="fixed" top='0' left='0' got something similar to what I was looking for.


const Header = (props) => {
    const { onOpen } = props; // Clicking the Menu Button triggers sidebar drawer on above component

    return (
        <Flex
            paddingX = {4}
            height = "20"
            alignItems = "center"
            justifyContent = "space-between"
            borderBottomWidth = "1px" >
            <MenuButton onOpen = { onOpen } />
            <Text display = "flex" fontSize = "2xl" fontWeight = "bold" justifyContent = "center">
                Header
            </Text>
            <ButtonGroup display='flex' justifyContent='space-between'>
                <ToneSelector />
                <TempoSelector />
                <ModeToggle />
            </ButtonGroup>
        </Flex>
    )
}

export default Header;