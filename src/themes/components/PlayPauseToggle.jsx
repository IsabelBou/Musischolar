import { useState } from 'react';
import { Button } from "@chakra-ui/react";
import { PiPauseDuotone, PiPlayDuotone } from 'react-icons/pi'

const PlayPauseToggle = () => {
    const [playing, setStatus] = useState(false);

    return (
        <div>
            <Button
            aria-label="Toggle Color Mode"
            onClick={() => setStatus(!playing)}
            _focus={{ boxShadow: 'none' }}
            w="fit-content">
            { playing ? <PiPauseDuotone/> : <PiPlayDuotone/> }
            </Button>
        </div>
    );
};

export default PlayPauseToggle;