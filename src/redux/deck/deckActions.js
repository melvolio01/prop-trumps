import actionTypes from '../actionTypes';

export const setPlayers = players => ({
    type: actionTypes.SET_PLAYERS,
    payload: players
})

export const setDecks = decks => ({
    type: actionTypes.SET_DECKS,
    payload: decks
})

export const setSelectedProperty = selectedProperty => ({
    type: actionTypes.SET_SELECTED_PROPERTY,
    payload: selectedProperty
})