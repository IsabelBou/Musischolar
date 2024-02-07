import { cards } from "./cards"

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
    },

    

}