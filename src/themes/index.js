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
import '@fontsource/open-sans/500.css'


// TODO: Change background color for modal

// TODO: Customize scrollbars

const customTheme = extendTheme(
{
    styles: {
        global: (props) => ({
            "html, body": {
                background: mode("primary.50", "primary.950")(props), // Light and dark mode colors, respectively
                fontSize: '100%', // Equals initial font-size value to user-preferred browser font size
                letterSpacing: "0.07rem", // Larger inter-letter spacing improves readability; ideally around 35% of the average letter width
                wordSpacing: '0.3rem', // Inter-word spacing should be at least 3.5 times the inter-letter spacing
                lineHeight: '1.5rem', // Line spacing at least space-and-a-half within paragraphs
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
            },
            "p": {
                mb: '1rem' // Paragraph spacing is at least 1.5 times larger than the line spacing, but should not exceed 2.0 times larger than the line spacing
            },
            "a":{
                color: mode("primary.800", "primary.50")(props),
                _hover: {color: mode("primary.700", "white")(props),},
            }
        }),
    },
    colors: themeColors,
    fonts: {
        body: `'Open Sans', sans-serif`,
        heading: `'Open Sans', sans-serif`,
        mono: "Menlo, monospace",
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