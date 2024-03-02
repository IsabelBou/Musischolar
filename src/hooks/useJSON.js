import { Midi } from '@tonejs/midi'
import { useBlob } from '.';
import { useEffect } from 'react';

//Turns MIDI blob into Tone.js usable JSON object 
export function useJSON(midiString, setMidiJson) {

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
    }, [midiString, setMidiJson])
    
}
