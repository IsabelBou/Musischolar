import { Slider, SliderTrack, SliderThumb, SliderMark } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { KEY } from '../resources/constants';

const ToneSlider = () => {

    const [sliderValue, setSliderValue] = useState(0)

    const labelStyles = {
        marginLeft: '-1',
        marginTop: '2',
        fontSize: 'sm',
        textAlign: 'center',
    }

    let symbol = (sliderValue) => {
        if      (sliderValue < 0) { return '♭' }
        else if (sliderValue > 0) { return '♯' }
        else { return '♮' }
    }

return (
    <Box marginBottom = { 5 } marginTop = { 10 } >
        <Slider defaultValue = { 0 } min = { -6 } max = { 6 } step = { 1 } aria-label='key-selection-slider' onChange={(val) => setSliderValue(val)}>
            <SliderTrack bg = 'primary.500'/>
            <SliderMark value = { 0 } {...labelStyles}  >♮</SliderMark>
            <SliderMark value = { -6 } {...labelStyles} >♭</SliderMark>
            <SliderMark value = { 6 } {...labelStyles}  >♯</SliderMark>
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
                {Math.abs(sliderValue)}{symbol(sliderValue)}
            </SliderMark>
        </Slider>
        <Box mt='5'> Tonalidades - {Math.abs(sliderValue)}{symbol(sliderValue)} </Box>
        <Box > Mayor: { KEY[sliderValue].mayor }</Box>
        <Box> Menor: { KEY[sliderValue].menor }</Box>
    </Box>
)};

export default ToneSlider;
