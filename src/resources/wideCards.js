import { cards } from "./cards"

export const wideCards = {

    TEMPLATE: {
        title: 'Wide Card Title',
        left:  { ...cards.TEMPLATE },
        right: { ...cards.TEMPLATE },
    },

    MODOS: {
        JONICO: {
            title: 'Jónico',
            left:  { ...cards.MODOS.MODAL.JONICO },
            right: { ...cards.MODOS.TONAL.JONICO },
        },
        DORICO: {
            title: 'Dórico',
            left:  { ...cards.MODOS.MODAL.DORICO },
            right: { ...cards.MODOS.TONAL.DORICO },
        },
        FRIGIO: {
            title: 'Frigio',
            left:  { ...cards.MODOS.MODAL.FRIGIO },
            right: { ...cards.MODOS.TONAL.FRIGIO },
        },
        LIDIO: {
            title: 'Lidio',
            left:  { ...cards.MODOS.MODAL.LIDIO },
            right: { ...cards.MODOS.TONAL.LIDIO },
        },
        MIXOLIDIO:{
            title: 'Mixolidio',
            left:  { ...cards.MODOS.MODAL.MIXOLIDIO },
            right: { ...cards.MODOS.TONAL.MIXOLIDIO },
        },
        EOLICO: {
            title: 'Eólico',
            left:  { ...cards.MODOS.MODAL.EOLICO },
            right: { ...cards.MODOS.TONAL.EOLICO },
        },
        LOCRIO: {
            title: 'Locrio',
            left:  { ...cards.MODOS.MODAL.LOCRIO },
            right: { ...cards.MODOS.TONAL.LOCRIO },
        },
    },
}