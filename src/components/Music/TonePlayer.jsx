import { useState, useEffect  } from 'react';
import * as Tone from 'tone';
import { useJSON } from '../../hooks';

export const TonePlayer = (props) => {
    const { midiString, isPlaying} = props;
    const [midiJson, setMidiJson] = useState([]);
    useJSON(midiString, setMidiJson);
    useEffect( () => {
        if (isPlaying) {
            const synth = new Tone.Synth().toDestination();
            const now = Tone.now();
            midiJson.tracks[0].notes.forEach( note => {
                synth.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now,
                    note.velocity
                );
            })
        }
    }, [isPlaying, midiJson])
    
}