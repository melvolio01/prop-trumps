import React from 'react';
import { connect } from 'react-redux';
import './PlayerInfo.scss'


const PlayerInfo = ({ selectedProperty, playerName, ind, decks }) => {
    console.log(selectedProperty)
    return decks != undefined && (
        <div className="player-info">
            <div className="player-name">{playerName}: {decks[ind].length} cards left</div>
            <div className="property-values">{(selectedProperty != '') ? selectedProperty + ": " + decks[ind][0][selectedProperty] : ""} </div>
        </div>
    );
};

const mapStateToProps = ({ deck: { players, selectedProperty, decks } }) => ({
    players, selectedProperty, decks
})

export default connect(mapStateToProps)(PlayerInfo);