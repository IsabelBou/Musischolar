import { defineStyleConfig } from '@chakra-ui/react'
/* 
    Currently Chakra doesn't allow the arrow to be colored in the regular Tooltip theme, so it must be colored separately through CSS variables. 
    See these links: 
    - https://github.com/chakra-ui/chakra-ui/issues/5283
    - https://github.com/chakra-ui/chakra-ui/issues/4695
    - https://github.com/chakra-ui/chakra-ui/blob/0f925f60d020896180235adf9ddeb70fa7b00c4d/packages/components/tooltip/src/tooltip.tsx
*/
import { cssVar } from "@chakra-ui/theme-tools"
import { Tooltip } from '@chakra-ui/react'

//References tooltip's arrow color
const $arrowBg = cssVar("popper-arrow-bg")

//Variables with the colors in case it needs to be changing later (to avoid writing it twice and potentially forgetting)
const tooltipColors = {
    dark: 'primary.85',
    light: 'primary.300',
}

//Forces default tooltip style, otherwise must write props in every component instance
Tooltip.defaultProps = 
    {...Tooltip.defaultProps,
        hasArrow: true,
        closeDelay: '300',
        placement: 'bottom',
    }

export const tooltipTheme = defineStyleConfig({
	baseStyle: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		borderRadius: "0.25rem",
		_light:{
            bg: tooltipColors.light,
            color: 'white',
            [$arrowBg.variable]: 'colors.' + tooltipColors.light,
        },
        _dark:{
            bg: tooltipColors.dark,
            color: 'dark gray',
            [$arrowBg.variable]: 'colors.' + tooltipColors.dark,
        }
	},
});