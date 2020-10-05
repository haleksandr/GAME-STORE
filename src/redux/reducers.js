const SET_GAMES = 'SET-GAMES';
const SET_FILTER = 'SET-FILTER';
const SET_QUERY = 'SET-QUERY';
const ADD_TO_SHOPPING_CART = 'ADD-TO-SHOPPING-CART';
const REMOVE_FROM_SHOPPING_CART = 'REMOVE-FROM-SHOPPING-CART';
const MINUS_FROM_SHOPPING_CART = 'MINUS-FROM-SHOPPING-CART';

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
        case SET_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            }
        case ADD_TO_SHOPPING_CART:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ]
            }
        case REMOVE_FROM_SHOPPING_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(obj => obj.id !== action.payload)
            }
        case MINUS_FROM_SHOPPING_CART:
            return {

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

export const setQueryAC = (query) => {
    return {
        type: SET_QUERY,
        payload: query
    }
};

export const addToShoppingCartAC = (obj) => {
    return {
        type: ADD_TO_SHOPPING_CART,
        payload: obj
    }
};

export const removeFromShoppingCartAC = (id) => {
    return {
        type: REMOVE_FROM_SHOPPING_CART,
        payload: id
    }
};

export const minusFromShoppingCartAC = (id) => {
    return {
        type: MINUS_FROM_SHOPPING_CART,
        payload: id
    }
};

export default reducers;