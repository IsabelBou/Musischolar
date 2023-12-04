import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { themeColors } from './colors'
import { cardTheme } from './cardTheme'
import { cardAccordion } from './cardAccordion'
import { tooltipTheme } from './TooltipTheme'


const customTheme = extendTheme(
  {
    body: { minHeight: "100vh" },
    colors: themeColors,
      fonts: {
          body: "Verdana, sans-serif",
          heading: "Georgia, serif",
          mono: "Menlo, monospace",
      //space between each sentence to 1.5 line-height of your type
      //Within paragraphs, the spacing should be at least 1.5 times larger than the line spacing 
      //Under most circumstances, line spacing should not exceed 2.0
      //spacing between paragraphs should not exceed 2.0 times larger than the line spacing
      },
      components: {
        Card: cardTheme,
        Accordion: cardAccordion,
        Tooltip: tooltipTheme,
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