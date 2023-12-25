import { Box } from '@chakra-ui/react'
import { useDisclosure, Drawer, DrawerContent } from '@chakra-ui/react';
import Header from './Header'
import TestContent from './TestContent';


function AppShell() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box minHeight = "95vh" width = "85vw"> 
            <Header onOpen = { onOpen } /> {/* contains the Menu Button that will trigger opening the drawer */}
            <Drawer placement = "left"
                isOpen = { isOpen }
                onClose = { onClose }
                onOverlayClick = { onClose }
                size="xs" >
                <DrawerContent>
                    Navigation Content
                </DrawerContent>
            </Drawer>
            <TestContent />
        </Box>
    )
}

export default AppShell