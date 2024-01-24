import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys);

	const baseStyle = definePartsStyle({
		overlay: {
			backdropFilter: 'auto',
			backdropBlur: '1.5px',
			backdropSaturate:'50%',
		},
		dialog: {
			borderRadius: 'md',
			bg: `primary.75`,
			_dark: {
				bg: `primary.780`,
			}
		},
	})

export const modalTheme = defineMultiStyleConfig({
	baseStyle,
});