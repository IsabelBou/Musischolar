import { useEffect  } from 'react';
import * as Tone from 'tone';

export const TonePlayer = (props) => {
    const { midiJson, isPlaying} = props;
    useEffect( () => {
        const now = Tone.now();
        if (isPlaying) {
            const synth = new Tone.Synth().toDestination();
            console.log("midiJSON: ", midiJson);
            console.log("isPLaying: ", isPlaying)
            Tone.Transport.schedule( (time) => {
                midiJson.tracks[0].notes.forEach( note => {
                    synth.triggerAttackRelease(
                        note.name,
                        note.duration,
                        note.time + time,
                        note.velocity
                    );
                })
            }, 0);
            Tone.Transport.start(now);
        }
        else {
            console.log("isPLaying: ", isPlaying)
            Tone.Transport.toggle(now);
        }
    }, [isPlaying, midiJson])
    
}