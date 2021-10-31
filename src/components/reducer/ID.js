export const Id = (state = "", action) => {
    switch (action.type) {
        case 'sendID':
            return action.Id
        default: return state
    }
}