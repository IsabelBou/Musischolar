import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"
import { themeColors } from './colors'
import { cardTheme } from './cardTheme'
import { cardAccordion } from './cardAccordion'
import { tooltipTheme } from './tooltipTheme'
import { buttonTheme } from './buttonTheme'
import { popoverTheme } from './popoverTheme'
import { drawerTheme } from './drawerTheme'
import { sliderTheme } from './sliderTheme'

// TODO: Change background color for modal

// TODO: Customize scrollbars

const customTheme = extendTheme(
{
    styles: {
        global: (props) => ({
            "html, body": {
                background: mode("primary.50", "primary.950")(props), //light and dark mode colors, respectively
                fontSize: '100%', //initial font-size value to the whole document that is equal to the font size set by the user in the browser
            },
            "svg": {
                '.definition-scale': {
                    color: mode("primary.950", "primary.65")(props),
                    fill: mode("primary.950", "primary.65")(props),
                },
                '.playing': {
                    color: mode("primary.780", "primary.50")(props),
                    fill: mode("primary.780", "primary.50")(props),
                    filter: mode("drop-shadow(0 0 6rem blueviolet)", "drop-shadow(0 0 6rem lavender)")(props),
                }
            }
        }),
    },
    colors: themeColors,
    fonts: {
        body: "Verdana, sans-serif",
        heading: "Georgia, serif",
        mono: "Menlo, monospace",
        /*  TODO: Check accessibility of text:
        - space between each sentence to 1.5 line-height of your type
        - Within paragraphs, the spacing should be at least 1.5 times larger than the line spacing
        - Under most circumstances, line spacing should not exceed 2.0
        - spacing between paragraphs should not exceed 2.0 times larger than the line spacing
        */
    },
    components: {
        Card: cardTheme,
        Accordion: cardAccordion,
        Tooltip: tooltipTheme,
        Button: buttonTheme,
        Popover: popoverTheme,
        Drawer: drawerTheme,
        Slider: sliderTheme,
    },
},
    withDefaultColorScheme({ colorScheme: 'primary' }),
    {
        config: {
            disableTransitionOnChange: false
        },
    }
)

export default customTheme