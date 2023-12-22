import { ButtonGroup } from '@chakra-ui/react'
import  Toggle  from '../ModeToggle'
import ToneSelector from '../ToneSelector'
import TempoSelector from '../TempoSelector'


// IMPROVE: Fix header to absolute top of viewport.
    // position="fixed" top='0' left='0' got something similar to what I was looking for.

    const Header = () => {
        return (
            <ButtonGroup display='flex' justifyContent='space-between'>
                <Toggle />
                <ToneSelector />
                <TempoSelector />
            </ButtonGroup>
        )
    }
    
    export default Header;