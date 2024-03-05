import { Box} from "@chakra-ui/layout";
import { useState } from 'react';

import { VerovioRenderer, TonePlayer } from ".";
import { PlayPauseToggle } from '../Buttons';
import { useJSON } from "../../hooks";

export const Display = (props) => {
    const { score } = props;
    const [ midiString, setMidiString ] = useState([]);

    const midiJson = useJSON (midiString);

    const [ isPlaying, setIsPlaying ] = useState(false);

    //TODO: Sync Pay/Pause Toggler with MIDI reproduction

    return (
        <Box>
            <VerovioRenderer url = {score} setMidi= {setMidiString} />
            <TonePlayer midiJson = { midiJson } isPlaying = { isPlaying }/>
            <PlayPauseToggle onClick = {() => setIsPlaying(!isPlaying)} isPlaying = { isPlaying }/>
        </Box>
    )
}