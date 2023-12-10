import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

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
    sizes,
    defaultProps: {
        size: 'sq',
        colorScheme: 'primary',
        
    },
})

