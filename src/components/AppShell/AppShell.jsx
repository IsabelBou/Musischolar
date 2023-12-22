import { Box } from '@chakra-ui/react'
import Header from './Header'
import TestContent from './TestContent';

function AppShell() {

    return (
        <Box minHeight = "95vh" width = "85vw"> 
            <Header/>
            <TestContent />
        </Box>
    )
}

export default AppShell