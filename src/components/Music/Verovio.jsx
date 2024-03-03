import createVerovioModule from 'verovio/wasm'; //'verovio/wasm-hum' for humdrum support
import { VerovioToolkit } from 'verovio/esm';

import { useContext } from "react";
import { KeyContext } from '../../context';
import { RenderOptions } from '.';
import { KEY } from '../../resources';
import { useScore } from '../../hooks';

// TODO: Make component pure and return SVG to outer component instead of directly returning div

// wait for Verovio Module to load
const VerovioModule = await createVerovioModule();
const verovioToolkit = new VerovioToolkit(VerovioModule);

export const VerovioRenderer = (props) => {

    const { key } = useContext(KeyContext);
    const { url, setMidi } = props;

        /* SHEET RENDERING */
    // Setup MEI rendering options and load previously saved MEI score as text
    verovioToolkit.setOptions(RenderOptions({transpose: KEY[key].trasposevrv}));
    verovioToolkit.loadData(useScore(url));
    const scoreSVG = verovioToolkit.renderToSVG(1, {});

        /* MIDI CREATION */
    // Create MIDI file with toolkitm add data URL prefixes describing the content, and lift to Player component
    let base64midi = verovioToolkit.renderToMIDI();
    let midiString = 'data:audio/midi;base64,' + base64midi;
    setMidi(midiString);

    return (
        <div dangerouslySetInnerHTML={{__html: scoreSVG}}/>
    )
}