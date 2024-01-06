import { createContext } from 'react';

// [Modified at TempoSelector] Multiplier for MEI's @midi.bpm used in MIDI playback
export const TempoContext = createContext(1);

// [Modified at ToneSelector] Key signature of choice, later mapped against KEY constant for verovio parameters
export const KeyContext = createContext(0);