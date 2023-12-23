import { Button, Tooltip } from "@chakra-ui/react";
import { GrMenu } from "react-icons/gr";

const MenuButton = () => {

    return (
        <div>
            <Tooltip label = 'Open Menu' >
                <Button
                    // Visible on mobile and tablets, disappears on wide screen
                    display = {{ base: "flex", md: "none" }}
                    aria-label = "open menu" alt = "menu" > 
                    <GrMenu />
                </Button>
            </Tooltip>
            
        </div>
    );
};

export default MenuButton;