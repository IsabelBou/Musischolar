import { Slider, SliderTrack, SliderThumb, SliderMark } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { useState } from 'react';

const ToneSlider = () => {

    const [sliderValue, setSliderValue] = useState(0)

    const labelStyles = {
        ml: '-1',
        marginTop: '2',
        fontSize: 'sm',
        textAlign: 'center',
    }

return (
    <Box marginBottom = { 5 } marginTop = { 10 } >
        <Slider defaultValue = { 0 } min = { -7 } max = { 7 } step = { 1 } aria-label='key-selection-slider' onChange={(val) => setSliderValue(val)}>
            <SliderTrack bg = 'primary.500'/>
            <SliderMark value = { 0 } {...labelStyles}  >♮</SliderMark>
            <SliderMark value = { -7 } {...labelStyles} >♭</SliderMark>
            <SliderMark value = { 7 } {...labelStyles}  >♯</SliderMark>
            <SliderTrack />
            <SliderThumb boxSize = { 3 } />
            <SliderMark
                value = { sliderValue }
                textAlign = 'center'
                bg = 'primary.500'
                color = 'white'
                mt = '-10'
                ml = '-5'
                w = '10' >
                {Math.abs(sliderValue)}
            </SliderMark>
        </Slider>
    </Box>
);
};

export default ToneSlider;
