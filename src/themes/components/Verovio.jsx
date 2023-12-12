import createVerovioModule from 'verovio/wasm'; //'verovio/wasm-hum' for humdrum support
import { VerovioToolkit } from 'verovio/esm';
import { useState, useEffect } from "react";
import { useColorModeValue } from '@chakra-ui/react';

// TODO: Adjust tempo based on TempoSelector slider by modifying markup in MEI. Also learn how its tagging works.


// wait for Verovio Module to load
const VerovioModule = await createVerovioModule();

const VerovioRenderer = (props) => {
    // Sets SVG color based on mode
    const color = useColorModeValue('#120B21', '#F3EFFD'); //(light mode, dark mode)
    const {url, setMidi} = props;
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
    })
        const verovioToolkit = new VerovioToolkit(VerovioModule);
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
        
        // TODO: highlight currently playing notes 

        // Get the MIDI file from the Verovio toolkit
        let base64midi = verovioToolkit.renderToMIDI();
        // Add the data URL prefixes describing the content
        let midiString = base64midi;
        setMidi(midiString);

        // returns HTML in a div, otherwise SVG will be shown as text in page
        return (
            <div dangerouslySetInnerHTML={{__html: scoreSVG}}/>
        )
}

export default VerovioRenderer;