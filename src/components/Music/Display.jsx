import { Box } from "@chakra-ui/layout";
import { useState } from 'react';

import { VerovioRenderer, TonePlayer } from ".";
import { PlayPauseToggle } from '../Buttons';

export const Display = (props) => {
    const { score } = props;
    const [ midiString, setMidiString ] = useState([]);
    const [ isPlaying, setIsPlaying ] = useState(false);

    //TODO: Sync Pay/Pause Toggler with MIDI reproduction

    return (
        <Box>
            <VerovioRenderer url = {score} setMidi= {setMidiString} />
            <TonePlayer midiString = { midiString } isPlaying = { isPlaying }/>
            <PlayPauseToggle onClick = {() => setIsPlaying(!isPlaying)} isPlaying = { isPlaying }/>
        </Box>
    )
}