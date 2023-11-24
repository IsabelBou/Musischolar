import { Button } from "@chakra-ui/react";
import { PiPauseDuotone, PiPlayDuotone } from 'react-icons/pi'

const PlayPauseToggle = (props) => {
    const {onClick, isPlaying} = props;
    return (
        <div>
            <Button
            onClick={onClick}
            aria-label="Toggle Play or Pause"
            _focus={{ boxShadow: 'none' }}
            w="fit-content">
            { isPlaying ? <PiPauseDuotone/> : <PiPlayDuotone/> }
            </Button>
        </div>
    );
};

export default PlayPauseToggle;