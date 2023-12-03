import { Button } from "@chakra-ui/react";
import { PiMetronomeDuotone } from "react-icons/pi";

const TempoSelector = () => {
//TODO: Slider for Tempo adjustment linked to midi playback
    return (
        <div>
            <Button 
            aria-label="Adjust Tempo" 
            _focus={{ boxShadow: 'none' }} 
            w="fit-content">
                <PiMetronomeDuotone />
            </Button>
        </div>
    );
};
export default TempoSelector;