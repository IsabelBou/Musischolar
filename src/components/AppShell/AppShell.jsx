import { Box } from '@chakra-ui/react'
import { useDisclosure, Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Header from './Header'
import TestContent from './TestContent';


function AppShell() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box> 
            {/* Sidebar is fixed to the left when screen is wider than lg */}
            <Box hideBelow = 'lg' position = "absolute" size = " xs ">
                <Sidebar />
            </Box>
            <Box marginLeft = {{ base: 0, lg: "80" }} maxHeight="100vh" overflowY="auto">
                <Header onOpen = { onOpen } position = "fixed" placement = "top" top={0}/> {/* contains the Menu Button that will trigger opening the drawer */}
                <Drawer placement = "left"
                    isOpen = { isOpen }
                    onClose = { onClose }
                    onOverlayClick = { onClose }
                    size = "xs" >
                    <DrawerOverlay />
                    <DrawerContent>
                        <Sidebar onClose = { onClose } /> {/* contains Close Button that will trigger closing the drawer */}
                    </DrawerContent>
                </Drawer>
                <Box p="4" maxHeight="100%" overflowY="auto">
                    <TestContent />
                </Box>
            </Box>
        </Box>
    )
}

// FIXME: Content scroll on Y direction (overflowY="auto") with sticky header regardless of screen height

export default AppShell