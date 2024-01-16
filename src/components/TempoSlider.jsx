import { Slider, SliderTrack, SliderThumb } from '@chakra-ui/react'
import { Box, HStack, Text } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { TempoContext } from './AppShell/SelectionContext';
import { Icon } from '@chakra-ui/react';
import { GiSnail, GiRabbit } from "react-icons/gi"

const TempoSlider = () => {

    const { tempo/*, setTempo*/ } = useContext(TempoContext)
    const [sliderValue, setSliderValue] = useState(tempo)

return (
    <Box marginBottom = { 2 } marginTop = { 1 } >
        <HStack marginBottom = { 1 }>
            <Icon as = { GiSnail }/>
            <Slider 
                defaultValue = { sliderValue } min = { -4 } max = { 4 } step = { 0.1 } 
                aria-label = 'tempo-selection-slider' 
                onChange = { (val) => { setSliderValue(val) } }>
                <SliderTrack />
                <SliderThumb />
                <SliderTrack />
                <Text>|</Text>
            </Slider>
            <Icon as = { GiRabbit }/>
        </HStack>
        <Text>Speed Multiplier: x{ (sliderValue) }</Text>
    </Box>
)};

export default TempoSlider;
