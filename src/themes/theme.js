import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { cardTheme } from './cardTheme'
import { cardAccordion } from './cardAccordion'

const colors = {
  "black": "#0c1015",
  "gray": {
    "50": "#f9fafa",
    "100": "#f1f1f2",
    "200": "#e6e7e9",
    "300": "#d2d4d7",
    "400": "#a9adb2",
    "500": "#797f88",
    "600": "#4d5560",
    "700": "#2e3744",
    "800": "#19202b",
    "900": "#141a23"
  },
  "purple": {
    "50": "#f9f5fe",
    "100": "#e8d9fb",
    "200": "#d6bcf9",
    "300": "#bd92f5",
    "400": "#aa73f2",
    "500": "#9048ee",
    "600": "#7a24eb",
    "700": "#6416c9",
    "800": "#5212a6",
    "900": "#3e0e7c"
  },
  "pink": {
    "50": "#fef5f9",
    "100": "#fbd8e6",
    "200": "#f8b7d1",
    "300": "#f488b3",
    "400": "#f1639b",
    "500": "#ea1d6f",
    "600": "#ca165e",
    "700": "#a6124d",
    "800": "#820e3d",
    "900": "#610b2d"
  },
  "red": {
    "50": "#fef5f4",
    "100": "#fbd8d4",
    "200": "#f8b5ae",
    "300": "#f3887c",
    "400": "#f06a5b",
    "500": "#eb3723",
    "600": "#ca2916",
    "700": "#a32112",
    "800": "#8b1c0f",
    "900": "#66140b"
  },
  "orange": {
    "50": "#fefaf4",
    "100": "#fbebd3",
    "200": "#f6d49f",
    "300": "#efb052",
    "400": "#e09119",
    "500": "#c17d15",
    "600": "#a36912",
    "700": "#82540e",
    "800": "#66420b",
    "900": "#543609"
  },
  "yellow": {
    "50": "#fffefa",
    "100": "#fcfadf",
    "200": "#f6f09e",
    "300": "#eee349",
    "400": "#dccf18",
    "500": "#b6ab14",
    "600": "#918910",
    "700": "#716a0d",
    "800": "#555009",
    "900": "#464208"
  },
  "green": {
    "50": "#f2fef9",
    "100": "#b7f8de",
    "200": "#52efb0",
    "300": "#18d98c",
    "400": "#15be7a",
    "500": "#12a369",
    "600": "#0f8757",
    "700": "#0c6944",
    "800": "#0a5638",
    "900": "#08472e"
  },
  "teal": {
    "50": "#effcfe",
    "100": "#b9f2f9",
    "200": "#73e5f2",
    "300": "#19d1e5",
    "400": "#16b1c3",
    "500": "#1297a6",
    "600": "#0f7b87",
    "700": "#0c5f69",
    "800": "#0a4f57",
    "900": "#084148"
  },
  "cyan": {
    "50": "#f3fbfe",
    "100": "#ceeffa",
    "200": "#b7e7f8",
    "300": "#9cdef6",
    "400": "#46c2ee",
    "500": "#1ab2e9",
    "600": "#17a1d2",
    "700": "#1385ae",
    "800": "#106d8f",
    "900": "#0c556f"
  },
  "blue": {
    "50": "#f1f6fe",
    "100": "#cddffa",
    "200": "#a8c8f7",
    "300": "#7fadf3",
    "400": "#5794f0",
    "500": "#317cec",
    "600": "#1865d8",
    "700": "#124da5",
    "800": "#0f3f88",
    "900": "#0c346f"
  },
  "primary": {
    "50": "#f8f6fe",
    "100": "#e4dcfc",
    "200": "#cdbdf9",
    "300": "#b197f5",
    "400": "#a081f3",
    "500": "#8962f1",
    "600": "#7446ee",
    "700": "#571fea",
    "800": "#4817cc",
    "900": "#351196"
  }
}


const customTheme = extendTheme(
  {
      colors: colors,
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
      }
  },
  withDefaultColorScheme({ colorScheme: 'primary' }),
  {
    config: {
      disableTransitionOnChange: false
    },
  }
)

export default customTheme