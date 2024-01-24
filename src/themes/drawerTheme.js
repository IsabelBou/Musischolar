import { drawerAnatomy as parts } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system"

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
    dialog: {
        backgroundColor: "primary.75",
        _dark:{
            backgroundColor: "primary.780",
        }
    },
    overlay: { 
        backdropFilter: 'auto',
        backdropBlur: '1.5px',
        backdropSaturate:'50%',
    }
})

export const drawerTheme = defineMultiStyleConfig({ baseStyle })