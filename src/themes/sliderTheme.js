import { sliderAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";


const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => ({
    track: {
        bg: mode("primary.400", "primary.300")(props),
    },
    thumb: {
        boxSize: '3',
    },
    mark: {
        textAlign: 'center',
    },
}));

export const sliderTheme = defineMultiStyleConfig({
    baseStyle,
});


//slidermark cannot have variant definitions by itself, so I'd rather have the props saved on the same place
export const bottomMark = {
    marginLeft: '-1',
    marginTop: '2',
    fontSize: 'sm',
};

export const topMark = {
    marginLeft: '-5',
    marginTop: '-10',
    background: 'primary.500',
    color: 'white',
    width: '10'
};