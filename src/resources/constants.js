// MEI file repository
export const scores = {
    MODES: {
        JONICO:     'https://raw.githubusercontent.com/IsabelBou/MusischolarMeiFiles/main/Lenguaje%20Musical/Modos/Jonico.mei',
        DORICO:     'https://raw.githubusercontent.com/IsabelBou/MusischolarMeiFiles/main/Lenguaje%20Musical/Modos/Dorico.mei',
        FRIGIO:     'https://raw.githubusercontent.com/IsabelBou/MusischolarMeiFiles/main/Lenguaje%20Musical/Modos/Frigio.mei',
        LIDIO:      'https://raw.githubusercontent.com/IsabelBou/MusischolarMeiFiles/main/Lenguaje%20Musical/Modos/Lidio.mei',
        MIXOLIDIO:  'https://raw.githubusercontent.com/IsabelBou/MusischolarMeiFiles/main/Lenguaje%20Musical/Modos/Mixolidio.mei',
        EOLICO:     'https://raw.githubusercontent.com/IsabelBou/MusischolarMeiFiles/main/Lenguaje%20Musical/Modos/Eolico.mei',
        LOCRIO:     'https://raw.githubusercontent.com/IsabelBou/MusischolarMeiFiles/main/Lenguaje%20Musical/Modos/Locrio.mei',
    },
    EQMODES: {
        JONICO:     'https://raw.githubusercontent.com/IsabelBou/MusischolarMeiFiles/main/Lenguaje%20Musical/Modos/Equivalentes%20tonales/EqJonico.mei',
        DORICO:     '',
        FRIGIO:     '',
        LIDIO:      '',
        MIXOLIDIO:  '',
        EOLICO:     '',
        LOCRIO:     '',
    },
}

// Custom card content
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
                description: 'Do Mayor',
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

export const wideCard = {
    TEMPLATE: {
        title: 'Wide Card Title',
        left: { ...cards.TEMPLATE },
        right: { ...cards.TEMPLATE },
    },
    MODOS: {
        JONICO: {
            title: 'Jónico',
            left: { ...cards.MODOS.MODAL.JONICO },
            right: { ...cards.MODOS.TONAL.JONICO },
        },
        DORICO: {
            title: 'Dórico',
            left: { ...cards.MODOS.MODAL.DORICO },
            right: { ...cards.TEMPLATE },
        },
        FRIGIO: {
            title: 'Frigio',
            left: { ...cards.MODOS.MODAL.FRIGIO },
            right: { ...cards.TEMPLATE },
        },
        LIDIO: {
            title: 'Lidio',
            left: { ...cards.MODOS.MODAL.LIDIO },
            right: { ...cards.TEMPLATE },
        },
        MIXOLIDIO:{
            title: 'Mixolidio',
            left: { ...cards.MODOS.MODAL.MIXOLIDIO },
            right: { ...cards.TEMPLATE },
        },
        EOLICO: {
            title: 'Eólico',
            left: { ...cards.MODOS.MODAL.EOLICO },
            right: { ...cards.TEMPLATE },
        },
        LOCRIO: {
            title: 'Locrio',
            left: { ...cards.MODOS.MODAL.LOCRIO },
            right: { ...cards.TEMPLATE },
        },
        
        
    },
}

export const parallelCards = {
    TEMPLATE: {
        left: {
            title: 'Title left',
            cards: [
                {...cards.TEMPLATE},
                {...cards.TEMPLATE},
            ],
        },
        right: {
            title: 'Title right',
            cards: [
                {...cards.TEMPLATE},
                {...cards.TEMPLATE},
            ],
        },
    }
}

// Key signature possibilities
export const KEY = {
    //Verovio transposition info: https://book.verovio.org/advanced-topics/transposition.html#transposition-by-tonic-pitch
    0: {
        mayor: 'Do',
        menor: 'La',
        trasposevrv: 'P1',
    },
    1: {
        mayor: 'Sol',
        menor: 'Mi',
        trasposevrv: '+G',
    },
    2: {
        mayor: 'Re',
        menor: 'Si',
        trasposevrv: 'D',
    },
    3: {
        mayor: 'La',
        menor: 'Fa♯',
        trasposevrv: 'A',
    },
    4: {
        mayor: 'Mi',
        menor: 'Do♯',
        trasposevrv: 'E',
    },
    5: {
        mayor: 'Si',
        menor: 'Sol♯',
        trasposevrv: 'B',
    },
    6: {
        mayor: 'Fa♯',
        menor: 'Re♯',
        trasposevrv: 'F#',
    },
    '-1': {
        mayor: 'Fa',
        menor: 'Re',
        trasposevrv: 'F',
    },
    '-2': {
        mayor: 'Si♭',
        menor: 'Sol',
        trasposevrv: 'Bb',
    },
    '-3': {
        mayor: 'Mi♭',
        menor: 'Do',
        trasposevrv: 'Eb',
    },
    '-4': {
        mayor: 'La♭',
        menor: 'Fa',
        trasposevrv: 'Ab',
    },
    '-5': {
        mayor: 'Re♭',
        menor: 'Si♭',
        trasposevrv: 'Db',
    },
    '-6': {
        mayor: 'Sol♭',
        menor: 'Mi♭',
        trasposevrv: '+Gb',
    },
}
