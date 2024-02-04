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
    }
}

export const wideCard = {
    TEMPLATE: {
        title: 'Wide Card Title',
        left: { ...cards.TEMPLATE },
        right: { ...cards.TEMPLATE },
    }
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
