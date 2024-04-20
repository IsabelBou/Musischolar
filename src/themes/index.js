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
import { modalTheme } from './modalTheme'
import { headingTheme } from './heading'

import { SimpleGrid } from '@chakra-ui/react'
import '@fontsource/open-sans/500.css'

// TODO: Customize scrollbars

const customTheme = extendTheme(
{
    styles: {
        global: (props) => ({
            "html, body": {
                background: mode("primary.50", "primary.950")(props), // Light and dark mode colors, respectively
                fontSize: '100%', // Equals initial font-size value to user-preferred browser font size
                letterSpacing: "0.07rem", // Larger inter-letter spacing improves readability; ideally around 35% of the average letter width
                wordSpacing: '0.25rem', // Inter-word spacing at least 3.5 times the inter-letter spacing
                lineHeight: '1.5rem', // Line spacing at least space-and-a-half within paragraphs
                scrollbarColor: `${mode("#6842d6", "#8e6ce0")(props)} transparent`, // Light = primary.400, dark = primary.300
                scrollBehavior: "smooth",
                scrollbarRadius: 5,
            },
            "svg": {
                '.definition-scale': {
                    color: mode("primary.950", "primary.65")(props),
                    fill: mode("primary.950", "primary.65")(props),
                },
                '.playing': { // Styles highlighting of currently playing notes
                    color: mode("comp_pink.900", "comp_pink.50")(props),
                    fill: mode("comp_pink.900", "comp_pink.50")(props),
                    filter: mode("drop-shadow(0 0 6rem blueviolet)", "drop-shadow(0 0 6rem lavender)")(props),
                },
                '.notehead': {
                    transitionDuration: '0.4s',
                    transitionTimingFunction: "ease-in-out",
                    _hover: {
                        color: mode("comp_pink.900", "comp_pink.50")(props),
                        fill: mode("comp_pink.900", "comp_pink.50")(props),
                        filter: mode("drop-shadow(0 0 6rem blueviolet)", "drop-shadow(0 0 6rem lavender)")(props),
                        
                        
                    }
                    
                }
            },
            "p": {
                mb: '1rem' // Paragraph spacing between 1.5 - 2.0 times larger than line spacing
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
        Modal: modalTheme,
        Heading: headingTheme,
    },
},
    withDefaultColorScheme({ colorScheme: 'primary' }),
    {
        config: {
            disableTransitionOnChange: false
        },
    },
    // SimpleGrid cannot have custom theming, so next best thing to avoid clutter is to force its default props here:
    SimpleGrid.defaultProps = {
        spacingX: 4,
        columns: { base: 1, sm: 1, md: 2 }
    }, {/* If screen about the size of a phone (portrait), 1 column. Otherwise, 2 of them*/}
)

export default customTheme