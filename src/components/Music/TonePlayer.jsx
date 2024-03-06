import { useEffect  } from 'react';
import * as Tone from 'tone';

export const TonePlayer = (props) => {
    const { midiJson, isPlaying} = props;
    const synth = new Tone.Synth().toDestination();

    useEffect( () => {
        const now = Tone.now();
        if (isPlaying) {
            var seq = new Tone.Sequence(((time, note) => {
                synth.triggerAttackRelease(note, "16n", time);
            }), midiJson.tracks[0].notes.map(note => note.name), "4n");
            seq.start(now)
        }
        Tone.Transport.toggle(now);
    }, [isPlaying, midiJson, synth])
}