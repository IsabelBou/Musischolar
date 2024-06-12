import { scores } from "./scores"

// TODO: Alternate accessible titles and descriptions must be declared too

export const cards = {
    TEMPLATE:{
        title: 'Title',
        description: 'More Information',
        score: scores.MODES.JONICO,
    },
    MODOS: {
        MODAL:{
            JONICO: {
                title: '1º',
                description: 'Escala desde Do',
                score: scores.MODES.JONICO,
            },
            DORICO: {
                title: '2º',
                description: 'Escala desde Re',
                score: scores.MODES.DORICO,
            },
            FRIGIO: {
                title: '3º',
                description: 'Escala desde Mi',
                score: scores.MODES.FRIGIO,
            },
            LIDIO: {
                title: '4º',
                description: 'Escala desde Fa',
                score: scores.MODES.LIDIO,
            },
            MIXOLIDIO: {
                title: '5º',
                description: 'Escala desde Sol',
                score: scores.MODES.MIXOLIDIO,
            },
            EOLICO: {
                title: '6º',
                description: 'Escala desde La',
                score: scores.MODES.EOLICO,
            },
            LOCRIO: {
                title: '7º',
                description: 'Escala desde Si',
                score: scores.MODES.LOCRIO,
            },
        },
        TONAL:{
            JONICO: {
                title: 'T. Mayor',
                description: 'Modo Jónico = Tonalidad Mayor. Do Mayor 🡆 0♮',
                score: scores.EQMODES.JONICO,
            },
            DORICO: {
                title: 'T. menor + VI↑',
                description: 'Tonalidad menor con VI aumentado. Re menor 🡆 1b',
                score: scores.EQMODES.DORICO,
            },
            FRIGIO: {
                title: 'T. menor + II↓',
                description: 'Tonalidad menor con II disminuido. Mi menor 🡆 1#',
                score: scores.EQMODES.FRIGIO,
            },
            LIDIO: {
                title: 'T. Mayor + IV↑',
                description: 'Tonalidad Mayor con IV aumentado. Fa Mayor 🡆 1b',
                score: scores.EQMODES.LIDIO,
            },
            MIXOLIDIO: {
                title: 'T. Mayor + VII↓',
                description: 'Tonalidad Mayor con VII aumentado. Sol Mayor 🡆 1#',
                score: scores.EQMODES.MIXOLIDIO,
            },
            EOLICO: {
                title: 'T. menor',
                description: 'Tonalidad menor sin sensible. La menor 🡆 0♮',
                score: scores.EQMODES.EOLICO,
            },
            LOCRIO: {
                title: 'T. menor + II↓ + V↓',
                description: 'Tonalidad menor con II y V disminuidos. Si menor 🡆 2#',
                score: scores.EQMODES.LOCRIO,
            },
        },
    },
}