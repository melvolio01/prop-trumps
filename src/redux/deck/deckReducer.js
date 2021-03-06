import actionTypes from '../actionTypes';
import { checkWin } from '../../helpers/deckHelpers';

const INITIAL_STATE = {
    players: [],
    decks: [],
    playerTurn: true,
    selectedProperty: '',
    winner: ''
}

const deckReducer = (state = INITIAL_STATE, action) => {
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
        case actionTypes.SET_TURN:
            return {
                ...state,
                playerTurn: !state.playerTurn
            }
        case actionTypes.CHECK_WIN:
            return {
                ...state,
                winner: checkWin(action.payload)
            }
        default:
            return INITIAL_STATE
    }
}

export default deckReducer;