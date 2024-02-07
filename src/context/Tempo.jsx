import { createContext } from 'react';

// [Modified at TempoSelector] Multiplier for MEI's @midi.bpm used in MIDI playback
export const TempoContext = createContext({
    tempo: 1,
    setTempo: () => {}
});
