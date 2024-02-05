import createVerovioModule from 'verovio/wasm'; //'verovio/wasm-hum' for humdrum support
import { VerovioToolkit } from 'verovio/esm';
import { useEffect, useContext } from "react";
import { TempoContext } from '../AppShell/SelectionContext';
import { KeyContext } from '../AppShell/SelectionContext';
import { KEY } from '../../resources/constants';
import verovioRenderOptions from './verovioRenderOptions';
import useScore from '../../hooks/useScore';

// TODO: Adjust tempo based on TempoSelector slider by modifying markup in MEI. See: https://book.verovio.org/toolkit-reference/toolkit-methods.html#edit
// Alternatively, pass TempoContext to MidiPlayer and alter player.speed() with user selection.

//OPTIMIZE: Memoize values that are unnecessarily recalculated every re-render

// wait for Verovio Module to load
const VerovioModule = await createVerovioModule();
const verovioToolkit = new VerovioToolkit(VerovioModule);
// TODO: Disable MIDI playback until module finishes loading 

const VerovioRenderer = (props) => {

    const { tempo } = useContext(TempoContext);
    const { key } = useContext(KeyContext);
    const { url, setMidi, ms } = props;

        /* SHEET RENDERING */
    // Setup MEI rendering options and load previously saved MEI score as text
    verovioToolkit.setOptions(verovioRenderOptions({transpose: KEY[key].trasposevrv}));
    verovioToolkit.loadData(useScore(url));
    const scoreSVG = verovioToolkit.renderToSVG(1, {});

        /* MIDI CREATION */
    // Create MIDI file with toolkitm add data URL prefixes describing the content, and lift to MidiPlayer
    let base64midi = verovioToolkit.renderToMIDI();
    let midiString = base64midi;
    setMidi(midiString);

        /* HIGHLIGHT NOTES BEING PLAYED */
    // OPTIMIZE: Remove flickering
    // Gets list of notes being played in the MIDI at a given time in milliseconds and set as class 'playing' for styling
    useEffect(() => {
        // Remove attribute 'playing' of all previously 'playing' notes
        let playingNotes = document.querySelectorAll('.note.playing');
        for (let playingNote of playingNotes) playingNote.classList.remove("playing");
        let currentElements = verovioToolkit.getElementsAtTime(ms);
        if (currentElements.notes) {
            for (let note of currentElements.notes) {
                let noteElement = document.getElementById(note);
                if (noteElement) noteElement.classList.add("playing");
            }
        }
    }, [ms]);

    console.log("tempo: ", tempo);
    console.log("current ms: ", ms);

    // returns HTML in a div, otherwise SVG will be shown as text in page
    return (
        <div dangerouslySetInnerHTML={{__html: scoreSVG}}/>
    )
}
export default VerovioRenderer;