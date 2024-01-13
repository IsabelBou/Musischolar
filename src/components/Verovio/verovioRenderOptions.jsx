//import { KeyContext } from './AppShell/SelectionContext';
//import { KEY } from '../resources/constants';

// TODO: Parameterize constructor

export default function verovioRenderOptions () {
    //const { key } = useContext(KeyContext);

    return {
    // Full option list: https://book.verovio.org/toolkit-reference/toolkit-options.html
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
        // Numbers for semitone transposition, [P/m/d/dd/M/A/AA]Number for intervals, A1 for sharp of current, [A-G]#/b for specific key to closest tonic. Mode is unaltered. See https://book.verovio.org/advanced-topics/transposition.html
        transpose: "P1",
        // TODO: Parameterize transpose according to key
    }
}