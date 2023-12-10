import { Button, Tooltip } from "@chakra-ui/react";
import { PiMetronomeDuotone } from "react-icons/pi";

const TempoSelector = () => {
//TODO: Slider for Tempo adjustment linked to midi playback
    return (
        <div>
            <Tooltip label = 'Change Tempo' >
                <Button aria-label = "Adjust Tempo" >
                    <PiMetronomeDuotone />
                </Button>
            </Tooltip>

        </div>
    );
};
export default TempoSelector;