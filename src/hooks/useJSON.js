import { Midi } from '@tonejs/midi'
import { useBlob } from '.';
import { useState, useEffect } from 'react';

//Turns MIDI blob into Tone.js usable JSON object 
export function useJSON (midiString) {
    const [midiJson, setMidiJson] = useState([]);
    useEffect( () => {
        async function RetrieveMidi() {
            const reader = new FileReader();
            reader.onload = (e) => {
                const partsData = new Midi(e.target.result);
                setMidiJson(partsData);
            };
            reader.readAsArrayBuffer(useBlob(midiString));   
        }
        RetrieveMidi();
    }, [midiString, setMidiJson]);
    return midiJson;
}
