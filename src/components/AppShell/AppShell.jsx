import { Box, Flex } from '@chakra-ui/react'
import { useDisclosure, Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Header from './Header'
//import TestContent from '../../pages/TestContent';
import { Outlet } from 'react-router-dom';

function AppShell() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex direction="column" h="100vh"> 
            {/* Sticky header always stays on top*/}
            <Box marginLeft = {{ base: 0, lg: "80" }}>
                <Header onOpen = { onOpen } position = "fixed" placement = "top"/> {/* contains the Menu Button that will trigger opening the drawer */}
            </Box>
            {/* Sidebar is fixed to the left when screen is wider than lg */}
            <Box hideBelow = 'lg' position = "absolute" size = "xs">
                <Sidebar />
            </Box>
            <Flex overflowY="auto" flexGrow={1} w="full"> 
                <Flex w="full" h="full" marginLeft = {{ base: 0, lg: "80" }} maxHeight="100vh">
                    <Box h="full"> 
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
                    </Box>
                    <Box flex="1" h="full" overflowY="auto" p={4}>
                        <Outlet />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AppShell