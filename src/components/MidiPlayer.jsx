import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import PlayPauseToggle from './PlayPauseToggle';
import VerovioRenderer from './Verovio/Verovio';
import { JZZ } from 'jzz';
import { SMF } from 'jzz-midi-smf';
import { Tiny } from 'jzz-synth-tiny';

// OPTIMIZE: Reduce load time of midi in web and disable play button in the meantime 

// Prepares MIDI file to be played
async function loadFile(midi, midiout, setIsPlaying) {
    // Loads MIDI engine
    const smf = new JZZ.MIDI.SMF(JZZ.lib.fromBase64(midi));
    const player = smf.player();
    // Connects to browser MIDI port declared below
    player.connect(midiout);
    //player.speed(3.0);
    // Change onEnd behavior: when MIDI ends, isPlaying = false, so Play/Pause toggler shows Play icon 
    player.onEnd = function() { setIsPlaying(false) };
    return player;
}

const Player = (props) => {
    // Score is URL with MEI file, passed to VerovioRenderer
    const { score } = props;
    // Used to sync Play/Pause toggler state with MIDI's
    const [isPlaying, setIsPlaying] = useState(false);
    // Current position in the MIDI (milliseconds)
    const [ms, setMS] = useState(0);
    // MIDI is generated inside VerovioRenderer from passed score and then lifted here
    const [midi, setMidi] = useState();
    // Ensure only once player instance is being used
    const [player, setPlayer] = useState();
    // Initializes JZZ (MIDI player and its instrumentation)
    SMF(JZZ);
    Tiny(JZZ);
    JZZ.synth.Tiny.register('Web Audio');
    // Creates MIDI port for browser connection above
    const midiout =  JZZ().openMidiOut('Web Audio');
    // Stored between re-renders
    const midioutRef = useRef(midiout);

    // Dependency on MIDI string retrieval
    useEffect(() => {
        // Only creates player if MIDI has changed
        async function createPlayer() {
            if(midi) {
                const player = await loadFile(midi, midioutRef.current, setIsPlaying);
                setPlayer(player);
            }
            // IMPROVE: Clean buffered MIDI upon MIDI/Player change; currently, changed MIDI will overlap with previous playing one until onEnd(), and next playblack will be doubled.
        }
        createPlayer();
    }, [midi, midioutRef, setIsPlaying]);

    // When player is loaded, synces isPlaying status (and Play/Pause toggler) to MIDI's
    useEffect(() => {
        if (player) {
            // Synces Play/Pause toggler state with MIDI's
            isPlaying ? player.resume() : player.pause();
        }
    }, [player, isPlaying])

    // IMPROVE: Remove flickering; learn about animation frame requests
    useLayoutEffect(() => {
        if (player) {
            const interval = setInterval(() => {
                let currentMS = (player.positionMS())
                setMS(currentMS);
            }, 10);
            return () => clearInterval(interval);
        }
    })

    return(
        <div>
            <VerovioRenderer url = { score } setMidi = { setMidi } ms = { ms } />  {/*Receives score URL (MEI file), processes it and sends back MIDI base64 string */}
            <PlayPauseToggle onClick = {() => setIsPlaying(!isPlaying)} isPlaying = { isPlaying }/>
        </div>
    )
}

export default Player;