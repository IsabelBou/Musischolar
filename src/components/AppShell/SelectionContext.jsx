import { createContext } from 'react';

// [Modified at TempoSelector] Multiplier for MEI's @midi.bpm used in MIDI playback
export const TempoContext = createContext({
    tempo: 1,
    setTempo: () => {}
});

// [Modified at ToneSelector] Key signature of choice, later mapped against KEY constant for verovio parameters
export const KeyContext = createContext({
    key: 0,
    setKey: () => {}
});