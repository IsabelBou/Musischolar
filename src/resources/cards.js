import { scores } from "./scores"

export const cards = {
    TEMPLATE:{
        title: 'Title',
        description: 'More Information',
        score: scores.MODES.JONICO,
    },
    MODOS: {
        MODAL:{
            JONICO: {
                title: '1.º',
                description: 'Escala desde Do',
                score: scores.MODES.JONICO,
            },
            DORICO: {
                title: '2.º',
                description: 'Escala desde Re',
                score: scores.MODES.DORICO,
            },
            FRIGIO: {
                title: '3.º',
                description: 'Escala desde Mi',
                score: scores.MODES.FRIGIO,
            },
            LIDIO: {
                title: '4.º',
                description: 'Escala desde Fa',
                score: scores.MODES.LIDIO,
            },
            MIXOLIDIO: {
                title: '5.º',
                description: 'Escala desde Sol',
                score: scores.MODES.MIXOLIDIO,
            },
            EOLICO: {
                title: '6.º',
                description: 'Escala desde La',
                score: scores.MODES.EOLICO,
            },
            LOCRIO: {
                title: '7.º',
                description: 'Escala desde Si',
                score: scores.MODES.LOCRIO,
            },
        },
        TONAL:{
            JONICO: {
                title: 'Tonalidad Mayor',
                description: 'More Information',
                score: scores.EQMODES.JONICO,
            },
            DORICO: {
                title: 'Tonalidad',
                description: 'More Information',
                score: scores.EQMODES.DORICO,
            },
            FRIGIO: {
                title: 'Tonalidad',
                description: 'More Information',
                score: scores.EQMODES.FRIGIO,
            },
            LIDIO: {
                title: 'Tonalidad',
                description: 'More Information',
                score: scores.EQMODES.LIDIO,
            },
            MIXOLIDIO: {
                title: 'Tonalidad',
                description: 'More Information',
                score: scores.EQMODES.MIXOLIDIO,
            },
            EOLICO: {
                title: 'Tonalidad Menor',
                description: 'More Information',
                score: scores.EQMODES.EOLICO,
            },
            LOCRIO: {
                title: 'Tonalidad Mayor',
                description: 'More Information',
                score: scores.EQMODES.LOCRIO,
            },
        },
    },
}