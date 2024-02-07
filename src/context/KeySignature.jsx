import { createContext } from 'react';

// [Modified at ToneSelector] Key signature of choice, later mapped against KEY constant for verovio parameters
export const KeyContext = createContext({
    key: 0,
    setKey: () => {}
});