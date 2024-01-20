import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import '@fontsource/open-sans/500.css'

const baseStyle = defineStyle({
    fontFamily: `"Open Sans", sans-serif`,
})

const sizes = {
    sq: defineStyle({
        padding: '3',
        fontSize: '22',
        boxShadow: 'none',
        textAlign: 'center',
        centerContent: 'true',
        position: 'relative',
        width: "fit-content",
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: "center",
    }),
}

export const buttonTheme = defineStyleConfig({
    baseStyle,
    sizes,
    defaultProps: {
        size: 'sq',
        colorScheme: 'primary',
        
    },
})

