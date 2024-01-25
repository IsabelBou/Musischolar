import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import '@fontsource/open-sans/500.css'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys)

const baseStyle = definePartsStyle({
  button: {
    allowToggle: true,
    allowMultiple: true,
    fontSize: '1.4rem', //Headings should be at least 20% larger than the normal text
    fontFamily: `"Open Sans", sans-serif`, //for some reason, accordion button will not inherit global style values
    letterSpacing: "0.07rem",
    wordSpacing: '0.25rem',
  },
  panel: {
    paddingBottom: '0.25rem',
    fontSize: '1rem'
  },
})

export const cardAccordion = defineMultiStyleConfig({ baseStyle })