
import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({

	container: {
		backgroundColor: "primary.75",
		_dark:{
			backgroundColor: "primary.780",
		},
		marginBottom: '1rem'
	},
	header: {
		paddingBottom: '0.5rem',
	},
	body: {
		paddingTop: '0.25rem',
		paddingBottom: '1rem',
	},
	footer: {
		paddingTop: '0.5rem',
	},
});

const variants = {

	double: definePartsStyle({
		container: {
			backgroundColor: "analog200.50",
			_dark:{
				backgroundColor: "analog200.750",
			},
			marginBottom: "1rem"
		},
		header: {
			fontSize: '1.6rem',
			paddingBottom: '0.8rem',
		},
		body: {
			paddingBottom: '0rem',
			padding:'0.2rem',
		},
	}),

	column: definePartsStyle({
		container: {
			backgroundColor: "analog400.100",
			_dark:{
				backgroundColor: "analog400.700",
			},
			paddingX: '0.1rem',
			marginBottom: "1rem"
		},
		header: {
			paddingY: '1rem',
			fontSize: '1.5rem',
		},
		body: {
			padding:'0.25rem',
		},
	}),

	accordionSingle: definePartsStyle({
		container: { marginBottom: "0.75rem" },
	})
};

export const cardTheme = defineMultiStyleConfig({ 
	baseStyle,
	variants,
})