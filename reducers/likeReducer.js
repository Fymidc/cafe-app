initialState = {
    likes: [],
    clikes:[]
}

export default function likeReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'GET_ALL_LIKES':
            return {
                ...state,
                likes: payload
            }

        case 'GET_CUSTOMER_LIKES':

            return {
                ...state,
                clikes: payload
            }

        case 'ADD_LIKE':
            return {
                ...state,
                likes: [...state.likes, payload]
            }

        case 'DELETE_LIKE':
            return {
                ...state,
                likes: state.likes.filter(like => like.id !== payload)
            }
        default:
            return state;
    }
}