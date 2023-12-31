import { popoverAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
/* 
    Currently Chakra doesn't allow the arrow to be colored in the regular popover theme, so it must be colored separately through CSS variables. 
    See these links: 
    - https://github.com/chakra-ui/chakra-ui/issues/5283
    - https://github.com/chakra-ui/chakra-ui/issues/4695
    - https://github.com/chakra-ui/chakra-ui/blob/0f925f60d020896180235adf9ddeb70fa7b00c4d/packages/components/tooltip/src/tooltip.tsx
*/
import { cssVar } from "@chakra-ui/theme-tools"

//References popover's arrow color
const $arrowBg = cssVar("popper-arrow-bg")

const popoverColors = {
    dark: 'primary.85',
    light: 'primary.300',
}

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
    content: {
        _light:{
            bg: popoverColors.light,
            color: 'white',
            [$arrowBg.variable]: 'colors.' + popoverColors.light,
        },
        _dark:{
            bg: popoverColors.dark,
            color: 'black',
            [$arrowBg.variable]: 'colors.' + popoverColors.dark,
        }
    },
})

export const popoverTheme = defineMultiStyleConfig({ baseStyle })