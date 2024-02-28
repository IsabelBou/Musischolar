import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
    fontFamily: `"Open Sans", sans-serif`,
    fontWeight: "bold",
    justifyContent: "center",
})

const title = defineStyle({
    marginBottom: "1rem"
})

export const headingTheme = defineStyleConfig({
    baseStyle,
    variants: { 
        "title": title,
    }    
})