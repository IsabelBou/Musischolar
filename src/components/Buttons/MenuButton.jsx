import { Button, Tooltip } from "@chakra-ui/react";
import { GrMenu } from "react-icons/gr";

const MenuButton = (props) => {

    const { onOpen } = props;

    return (
        <div>
            <Tooltip label = 'Open Menu' >
                <Button
                    // Visible on mobile and tablets, disappears on wide screen
                    display = {{ base: "flex", lg: "none" }}
                    aria-label = "open menu" alt = "menu" 
                    // Triggers sidebar drawer from AppShell
                    onClick = { onOpen } >
                    <GrMenu />
                </Button>
            </Tooltip>
            
        </div>
    );
};

export default MenuButton;