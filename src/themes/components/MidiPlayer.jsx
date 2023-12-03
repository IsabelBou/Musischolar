import { useState, useEffect } from 'react';
import PlayPauseToggle from './PlayPauseToggle';
import VerovioRenderer from './Verovio';
import { JZZ } from 'jzz';
import { SMF } from 'jzz-midi-smf';
import { Tiny } from 'jzz-synth-tiny';

async function play(midi) {
    await SMF(JZZ);
    await Tiny(JZZ);
    await JZZ.synth.Tiny.register('Web Audio');
    const midiout = await JZZ().openMidiOut('Web Audio');
    const smf = new JZZ.MIDI.SMF(JZZ.lib.fromBase64(midi));
    const player = smf.player();
    player.connect(midiout);
    player.play();
}

const Player = (props) => {
    const { score } = props;
    const [isPlaying, setIsPlaying] = useState(false);
    const [midi, setMidi] = useState();
    useEffect(() => {
        async function playMidi() {
            if(midi) {
                await play(midi)
            }
        }
        playMidi();
    }, [midi])

    //TODO: Change button to pause when MIDI ends
    //FIXME: Get the MIDI to always respond to button input
    //OPTIMIZE: Reduce load time of midi in web

    return(
        <div>
            <VerovioRenderer url = { score } setMidi = {setMidi} />
            <PlayPauseToggle onClick={() => setIsPlaying(!isPlaying)} isPlaying={isPlaying}/>
        </div>
    )
}

export default Player;