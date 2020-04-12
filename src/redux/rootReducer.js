import { combineReducers } from 'redux';
import deckReducer from './deck/deckReducer';

export default combineReducers({
    deck: deckReducer
});