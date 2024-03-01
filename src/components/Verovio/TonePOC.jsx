import { Box, Button } from '@chakra-ui/react';
import * as Tone from 'tone';
import { Midi } from '@tonejs/midi'
import { useState, useEffect } from 'react';

const dataURItoBlob = dataURI => {
	const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
	
    for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], {type: mimeString});
};

export const POC = () => {
    const synth = new Tone.Synth().toDestination()
    const now = Tone.now();
    const [midiJson, setMidiJson] = useState([]);
    const midiString = "data:audio/midi;base64,TVRoZAAAAAYAAQACAHhNVHJrAAAACwD/UQMB6EgA/y8ATVRyawAAAEwAkDxag2CQPAAAkD5ag2CQPgAAkEBag2CQQAAAkEFag2CQQQAAkENag2CQQwAAkEVag2CQRQAAkEdag2CQRwAAkEhag2CQSAAA/y8A"; //es una Promesa
    useEffect( () => {
        async function retrieveMidi() {
            const reader = new FileReader();
            reader.onload = (e) => {
                const partsData = new Midi(e.target.result);
                setMidiJson(partsData);
            };
        reader.readAsArrayBuffer(dataURItoBlob(midiString));   
        }
        retrieveMidi();
    }, [midiString])

    return (
        <Box>
            <Button onClick={() => {
                midiJson.tracks[0].notes.forEach( note => {
                    synth.triggerAttackRelease(
                        note.name,
                        note.duration,
                        note.time + now,
                        note.velocity
                    );
                })
                }}>POC</Button>

        </Box>
    )
}