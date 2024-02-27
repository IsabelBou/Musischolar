import { Slider, SliderTrack, SliderThumb } from '@chakra-ui/react'
import { Box, HStack, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { GiSnail, GiRabbit } from "react-icons/gi"

import { TempoContext } from '../context';

/* 
In order to display the tempo multiplier with equal spacing on both sides
(example: x0.5 [half] and x2 [twice] should have equal distance from 1, the middle mark),
the tempo values are calculated afterwards based on the slider thumb position:
- The slider middle is 0, so values at either sides are the same regardless of sign
- Negative values are treated as divisor to 1 to provide fractional multipliers
- absolute sliderValue is added 1 in order to avoid 0 as divisor
*/
export const TempoSlider = () => {

    // IMPROVE: Move initial logic/pure part out of this component (hook/reducer?)

    const { tempo, setTempo } = useContext(TempoContext)

    // gets sliderValue equivalent to current tempo
    let fromTempo = (tempo) => {
        if      (tempo < 1)  { return (1/tempo)+1 }
        else if (tempo > 1)  { return tempo-1 }
        else if (tempo == 1) { return 0 }
    }

    const [sliderValue, setSliderValue] = useState(fromTempo(tempo))

    // gets tempo based on current sliderValue
    let multiplier = (sliderValue) => {
        if      (sliderValue < 0) { return Math.round(1/Math.abs(sliderValue-1)*100)/100 }
        else if (sliderValue > 0) { return sliderValue+1 }
        else                      { return 1 }
    }

return (
    <Box marginBottom = { 2 } marginTop = { 1 } >
        <HStack marginBottom = { 1 }>
            <Icon as = { GiSnail }/>
            <Slider 
                defaultValue = { sliderValue } min = { -4 } max = { 4 } step = { 0.05 } 
                aria-label = 'tempo-selection-slider' 
                onChange = { (val) => { setSliderValue(val), setTempo(multiplier(val)) } }>
                <SliderTrack />
                <SliderThumb />
                <SliderTrack />
                <Text>|</Text>
            </Slider>
            <Icon as = { GiRabbit }/>
        </HStack>
        <Text>Speed Multiplier: x{ multiplier(sliderValue) }</Text>
    </Box>
)};