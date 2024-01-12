import createVerovioModule from 'verovio/wasm'; //'verovio/wasm-hum' for humdrum support
import { VerovioToolkit } from 'verovio/esm';
import { useState, useEffect, useContext } from "react";
import { useColorModeValue } from '@chakra-ui/react';
import { TempoContext, KeyContext } from './AppShell/SelectionContext';
//import { KEY } from '../resources/constants';

// TODO: Adjust tempo based on TempoSelector slider by modifying markup in MEI. See: https://book.verovio.org/toolkit-reference/toolkit-methods.html#edit

// TODO: Refactor options to improve code readability

// wait for Verovio Module to load
const VerovioModule = await createVerovioModule();
const verovioToolkit = new VerovioToolkit(VerovioModule);


//OPTIMIZE: Memoize values that are unnecessarily recalculated every re-render
const VerovioRenderer = (props) => {
    const tempoModifier = useContext(TempoContext);
    const { key } = useContext(KeyContext);
    // Sets SVG color based on mode
    const color = useColorModeValue('#120B21', '#F3EFFD'); //(light mode, dark mode)
    const { url, setMidi, ms } = props;
    // dynamically changes score
    const [score, setScore] = useState();

    useEffect(() => {
        // gets MEI score from URL and saves it as plain text
        async function retrieveScore() {
            const score = await fetch ( url )
                .then((response) => response.text());
            setScore(score);
        }
        retrieveScore();
    }, [url]) //run only if URL changes 

    // Full option list: https://book.verovio.org/toolkit-reference/toolkit-options.html
    verovioToolkit.setOptions({
        justifyVertically: true,
        // SVG size will be equal to filled score (will not render empty spaces)
        adjustPageWidth: true,
        adjustPageHeight: true,
        // remove margins from rendered SVG
        pageMarginTop: 0,
        pageMarginBottom: 0,
        pageMarginLeft: 0,
        pageMarginRight: 0,
        // scale down to fit containers/embed in divs
        svgViewBox: true,
        // adds CSS as string with  added to SVG output
        svgCss: `.definition-scale { color: ${color}; fill: ${color} };`,
        // Numbers for semitone transposition, [P/m/d/dd/M/A/AA]Number for intervals, A1 for sharp of current, [A-G]#/b for specific key to closest tonic. Mode is unaltered. See https://book.verovio.org/advanced-topics/transposition.html
        transpose: "P1",
        // TODO: Parameterize transpose according to Tone Selector
    });
    // loads previously saved MEI score as text
    verovioToolkit.loadData(score);
    const scoreSVG = verovioToolkit.renderToSVG(1, {});

    // Get the MIDI file from the Verovio toolkit
    let base64midi = verovioToolkit.renderToMIDI();
    // Add the data URL prefixes describing the content
    let midiString = base64midi;
    setMidi(midiString);

    // Highlight currently playing notes
    useEffect(() => {
        // Remove attribute 'playing' of all previously 'playing' notes
        let playingNotes = document.querySelectorAll('.note.playing');
        for (let playingNote of playingNotes) playingNote.classList.remove("playing");
        // Gets list of notes being played in the MIDI at a given time in milliseconds
        let currentElements = verovioToolkit.getElementsAtTime(ms);
        // Get all notes currently playing and set as class 'playing' for styling
        if (currentElements.notes) {
            for (let note of currentElements.notes) {
                let noteElement = document.getElementById(note);
                if (noteElement) noteElement.classList.add("playing");
            }
        }
    }, [ms]);

    console.log(tempoModifier);
    console.log(key);
    console.log(ms);

    // returns HTML in a div, otherwise SVG will be shown as text in page
    return (
        <div dangerouslySetInnerHTML={{__html: scoreSVG}}/>
    )
}

export default VerovioRenderer;