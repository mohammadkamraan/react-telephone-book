export const telephone = (state = '', action) => {
    switch (action.type) {
        case 'sendNumbers':
            return [action.numbers]
        default: return state
    }
}