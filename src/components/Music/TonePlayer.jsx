import { useEffect  } from 'react';
import * as Tone from 'tone';

export const TonePlayer = (props) => {
    const { midiJson, isPlaying} = props;
    const synth = new Tone.Synth().toDestination();

    useEffect( () => {
        if (isPlaying) {
            new Tone.Sequence(((time, note) => {
                synth.triggerAttackRelease(note, "16n", time);
            }), midiJson.tracks[0].notes.map(note => note.name), "4n").start();
            Tone.Transport.start();
        }
        else {
            Tone.Transport.cancel(0);
            Tone.Transport.stop();
        }
    }, [isPlaying, midiJson, synth])
}