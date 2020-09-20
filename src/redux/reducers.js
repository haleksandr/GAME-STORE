const SET_GAMES = 'SET-GAMES';
const SET_FILTER = 'SET-FILTER';
const ADD_TO_SHOPPING_CART = 'ADD-TO-SHOPPING-CART';

let initialState = {
    games: [],
    isReady: false,
    cartItems: [],
    filterBy: 'all',
    searchQuery: '',
    totalPrice: 0
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAMES:
            return {
                ...state,
                games: action.payload,
                isReady: true,
            }
        case SET_FILTER:
            return {
                ...state,
                filterBy: action.payload
            }
        case ADD_TO_SHOPPING_CART:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ]
            }
        default:
            return state;
    }
};

export const setGamesAC = (games) => {
    return {
        type: SET_GAMES,
        payload: games
    }
};

export const setFilterAC = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter
    }
};

export const addToShoppingCartAC = (item) => {
    return {
        type: ADD_TO_SHOPPING_CART,
        payload: item
    }
}

export default reducers;