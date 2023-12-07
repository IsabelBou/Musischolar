
import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  
  header: {
    paddingBottom: '0.5rem',
  },
  body: {
    paddingTop: '0.25rem',
    paddingBottom: '1rem'
  },
  footer: {
    paddingTop: '0.5rem',
  },
})

export const cardTheme = defineMultiStyleConfig({ baseStyle })