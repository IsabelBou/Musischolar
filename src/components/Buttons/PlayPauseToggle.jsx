import { Button } from "@chakra-ui/react";
import { PiPauseDuotone, PiPlayDuotone } from 'react-icons/pi'

export const PlayPauseToggle = (props) => {
    const { onClick, isPlaying } = props;
    return (
        <div>
            <Button p="2" mt="3"
            aria-label = "Toggle Play or Pause"
            onClick = { onClick } >
                { isPlaying ? <PiPauseDuotone/> : <PiPlayDuotone/> }
            </Button>
        </div>
    );
};