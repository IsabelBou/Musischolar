import { Button, Tooltip} from "@chakra-ui/react";
import { PiMetronomeDuotone } from "react-icons/pi";
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverArrow, PopoverBody } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react" //Needed for Popover workaround

const TempoSelector = () => {

//TODO: Slider for Tempo adjustment linked to midi playback

    return (
        <div>
            <Popover placement='left-start'>
                <Tooltip label = 'Change Tempo' >
                    <Box display="inline-block"> {/* Box is needed as workaround to keep button's tooltip, see here: https://github.com/chakra-ui/chakra-ui/issues/2843#issuecomment-748641805 */}
                        <PopoverTrigger>
                            <Button aria-label = "Adjust Tempo" >
                                <PiMetronomeDuotone />
                            </Button>
                        </PopoverTrigger>
                    </Box>
                </Tooltip>
                <PopoverContent>
                    <PopoverHeader> Choose your tempo </PopoverHeader>
                    <PopoverArrow />
                    <PopoverBody>
                        Slider will go here
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        
        </div>
    );
};

export default TempoSelector;