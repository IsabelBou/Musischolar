export function verovioRenderOptions (props) {
// Full option list: https://book.verovio.org/toolkit-reference/toolkit-options.html

    return {
        justifyVertically: true,

        // SVG size will be equal to filled score (will not render empty spaces)
        adjustPageWidth: true,
        adjustPageHeight: true,

        // Remove margins from rendered SVG
        pageMarginTop: 0,
        pageMarginBottom: 0,
        pageMarginLeft: 0,
        pageMarginRight: 0,

        // Scale down to fit containers/embed in divs
        svgViewBox: true,

        // Numbers for semitone transposition, [P/m/d/dd/M/A/AA]Number for intervals, A1 for sharp of current, [A-G]#/b for specific key to closest tonic. Mode is unaltered. See https://book.verovio.org/advanced-topics/transposition.html
        transpose: props?.transpose ? props.transpose : "P1",

        // Custom data-* attributes for SVGs' CSS selection
        svgAdditionalAttribute: ["note@type", "note@deg", "note@pname", "note@oct"]
    }
}