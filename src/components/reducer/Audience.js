export const Audience = (state = "", action) => {
    switch (action.type) {
        case 'sendNames':
            return action.names
        default: return state
    }
}