import actionTypes from '../actionTypes';

const INITIAL_STATE = {
    players: [],
    decks: [],
    playerTurn: true,
    selectedProperty: ''
}

const deckReducer = (state = INITIAL_STATE, action) => {
    console.log(`ACTION: ${JSON.stringify(action.type)}`)
    switch (action.type) {
        case actionTypes.SET_PLAYERS:
            return {
                ...state,
                players: action.payload
            }
        case actionTypes.SET_DECKS:
            return {
                ...state,
                decks: action.payload
            }
        case actionTypes.SET_SELECTED_PROPERTY:
            return {
                ...state,
                selectedProperty: action.payload
            }
        default:
            return INITIAL_STATE
    }
}

export default deckReducer;