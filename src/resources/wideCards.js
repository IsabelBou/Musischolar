import { cards } from "./cards"

export const wideCards = {

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