
import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  header: {
    paddingBottom: '1rem',
  },
  body: {
    paddingTop: '1rem',
  },
  footer: {
    paddingTop: '1rem',
  },
})

export const cardTheme = defineMultiStyleConfig({ baseStyle })