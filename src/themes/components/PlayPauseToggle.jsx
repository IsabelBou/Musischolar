import { Button } from "@chakra-ui/react";
import { PiPauseDuotone, PiPlayDuotone } from 'react-icons/pi'

const PlayPauseToggle = (props) => {
    const { onClick, isPlaying } = props;
    return (
        <div>
            <Button aria-label = "Toggle Play or Pause"
            onClick = { onClick } >
                { isPlaying ? <PiPauseDuotone/> : <PiPlayDuotone/> }
            </Button>
        </div>
    );
};

export default PlayPauseToggle;