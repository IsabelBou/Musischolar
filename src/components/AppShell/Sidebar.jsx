import {
    Box,
    CloseButton,
    Flex,
    Text,
} from "@chakra-ui/react";
import Nav from "./Nav";

const Sidebar = (props) => {
    const { onClose } = props;

    return (
        <Box
            transition="2s ease"
            width = {{ base: "full", lg: 80 }}
            position = "fixed"
            height = "full"
            borderRightWidth = "1px"
        >
            <Flex height = "20" alignItems = "center" marginX = "8" justifyContent = "space-between">
                <Text fontSize="xl" fontWeight="bold">
                    Menu List from Sidebar
                </Text>
                <CloseButton display = {{ base: "flex", lg: "none" }} 
                    onClick = { onClose } />
            </Flex>
            <Nav />
        </Box>
    );
};
export default Sidebar