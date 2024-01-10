import { Slider, SliderTrack, SliderThumb, SliderMark } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { KEY } from '../resources/constants';
import { topMark, bottomMark } from '../themes/sliderTheme';
import { KeyContext } from './AppShell/SelectionContext';

const ToneSlider = () => {

    const { key, setKey } = useContext(KeyContext)
    const [sliderValue, setSliderValue] = useState(key)

    let symbol = (sliderValue) => {
        if      (sliderValue < 0) { return '♭' }
        else if (sliderValue > 0) { return '♯' }
        else                      { return '♮' }
    }

return (
    <Box marginBottom = { 5 } marginTop = { 10 } >
        <Slider defaultValue = { key } min = { -6 } max = { 6 } step = { 1 } aria-label='key-selection-slider' onChange={(val) => { setSliderValue(val) } } onChangeEnd={(val) => { setSliderValue(val), setKey(val) } } >
            <SliderTrack />
            <SliderThumb />
            <SliderMark value = { 0 }   {...bottomMark} >♮</SliderMark>
            <SliderMark value = { -6 }  {...bottomMark} >♭</SliderMark>
            <SliderMark value = { 6 }   {...bottomMark} >♯</SliderMark>
            <SliderTrack />
            <SliderMark value = { sliderValue } {...topMark} >
                {Math.abs(sliderValue)}{symbol(sliderValue)}
            </SliderMark>
        </Slider>
        <Box mt='5'> Tonalidades - {Math.abs(sliderValue)}{symbol(sliderValue)} </Box>
        <Box > Mayor: { KEY[sliderValue].mayor }</Box>
        <Box> Menor: { KEY[sliderValue].menor }</Box>
    </Box>
)};

export default ToneSlider;
