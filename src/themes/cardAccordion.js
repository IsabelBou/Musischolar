import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys)

const baseStyle = definePartsStyle({
  button: {
    allowToggle: true,
    allowMultiple: true,
    fontSize: '1.5rem',
  },
  panel: {
    paddingBottom: '0.25rem',
    fontSize: '0.75rem',
  },
  /*item: {
    border: 'none',
  },*/
})

export const cardAccordion = defineMultiStyleConfig({ baseStyle })