import createVerovioModule from 'verovio/wasm';
import { VerovioToolkit } from 'verovio/esm';
import { useState, useEffect } from "react";

//wait for Verovio Module to load
const VerovioModule = await createVerovioModule();

const VerovioRenderer = (props) => {
    const {url} = props;
    //dynamically changes score
    const [score, setScore] = useState();

    useEffect(() => {
        //gets MEI score from URL and saves it as plain text
        async function retrieveScore() {
            const score = await fetch ( url )
                .then((response) => response.text());
            setScore(score);
        }
        retrieveScore();
    })
        const verovioToolkit = new VerovioToolkit(VerovioModule);
        //Options: https://book.verovio.org/toolkit-reference/toolkit-options.html
        verovioToolkit.setOptions({
            justifyVertically: true,
            svgViewBox: true,
        });
        //loads previously saved MEI score as text
        verovioToolkit.loadData(score);
        const data = verovioToolkit.renderToSVG(1, {});
        //returns HTML in a div, otherwise SVG will be shown as text in page
        return (
            <div dangerouslySetInnerHTML={{__html: data}}/>
        )
}

export default VerovioRenderer;