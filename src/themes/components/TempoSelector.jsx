import { Button, Tooltip } from "@chakra-ui/react";
import { PiMetronomeDuotone } from "react-icons/pi";

const TempoSelector = () => {
//TODO: Slider for Tempo adjustment linked to midi playback
    return (
        <div>
            <Tooltip hasArrow closeDelay={200} label='Change Tempo' placement='bottom'>
                <Button 
                aria-label="Adjust Tempo" 
                _focus={{ boxShadow: 'none' }} 
                w="fit-content">
                    <PiMetronomeDuotone />
                </Button>
            </Tooltip>

        </div>
    );
};
export default TempoSelector;