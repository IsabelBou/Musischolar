import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"
import { themeColors } from './colors'
import { cardTheme } from './cardTheme'
import { cardAccordion } from './cardAccordion'
import { tooltipTheme } from './TooltipTheme'
import { buttonTheme } from './buttonTheme'

// TODO: Create button theme to unify shape and reduced passed props (increase readability)

const customTheme = extendTheme(
  {
    styles: {
      global: (props) => ({
        "html, body": {
          background: mode("primary.50", "primary.950")(props),  //light and dark mode colors, respectively
        },
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