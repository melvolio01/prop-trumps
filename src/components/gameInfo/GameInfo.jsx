import React from 'react';
import { connect } from 'react-redux';
import PlayerInfo from '../playerInfo/PlayerInfo';
import './GameInfo.scss';
import { setDecks, setSelectedProperty } from '../../redux/deck/deckActions.js';
import { updateDecksWin, updateDecksLoss } from '../../helpers/deckHelpers';

const GameInfo = ({ players, selectedProperty, decks, setDecks, setSelectedProperty }) => {
    let scoreClass;
    let checkedDecks = '';
    if ((decks.length > 0) && (selectedProperty !== '')) {
        scoreClass = decks[0][0][selectedProperty] > decks[1][0][selectedProperty] ? "won" : "lost";
        checkedDecks = handleDecks(decks[0], decks[1], scoreClass);
    }
    return (
        <div className="score-div">
            {players.map((player, index) => {
                return <PlayerInfo playerName={player} ind={index} />
            })}
            <div className={`win-div ${scoreClass}`}>
                <p><span className="plane-name">{decks[0][0]["name"]}</span>{selectedProperty + ": " + decks[0][0][selectedProperty]}</p>
                <p><span className="plane-name">{decks[1][0]["name"]}</span>{selectedProperty + ": " + decks[1][0][selectedProperty]}</p>
                <h4>{"Card  " + scoreClass + "!"}</h4>
                <div className="next-button" onClick={() => updateDecks(checkedDecks, setDecks, setSelectedProperty)}>Next turn</div>
            </div>
        </div>
    );

};

const updateDecks = (checkedDecks, setDecks, setSelectedProperty) => {
    setSelectedProperty('');
    setDecks(checkedDecks);
}

const handleDecks = (playerDeck, computerDeck, scoreClass) => {
    let updatedDecks;
    if (scoreClass === "won") {
        updatedDecks = updateDecksWin(playerDeck, computerDeck)
    } else if (scoreClass === "lost") {
        updatedDecks = updateDecksLoss(playerDeck, computerDeck)
    }
    return updatedDecks;
}


const mapStateToProps = ({ deck: { players, decks, selectedProperty } }) => ({
    players, selectedProperty, decks
})

const mapDispatchToProps = dispatch => ({
    setDecks: (decks) => dispatch(setDecks(decks)),
    setSelectedProperty: (selectedProperty) => dispatch(setSelectedProperty(selectedProperty))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameInfo);