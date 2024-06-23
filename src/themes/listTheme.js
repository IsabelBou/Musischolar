import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'
import { listAnatomy as parts } from '@chakra-ui/anatomy'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
    container: {
        alignItems:"center"
    },
    item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
})

export const listTheme = defineMultiStyleConfig({ baseStyle })

