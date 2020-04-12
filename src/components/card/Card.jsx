import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Card.scss';
import { setSelectedProperty } from '../../redux/deck/deckActions';
import { updateDecks } from '../../helpers/deckHelpers';

class Card extends Component {
    render() {
        const { decks, playerTurn, selectedProperty } = this.props;
        // check decks not undefined then get card properties from first card in player deck
        const { name, image, groundattack, dogfight, production, payload, topspeed, range } = decks.length > 0 ?
            decks[0][0] : ''
        const playerCard = (decks.length > 0) ? decks[0][0] : ''
        const computerCard = (decks.length > 0) ? decks[0][0] : '';
        const localUrl = (image != '') ? `/images/${image}.jpg` : '';
        return decks != undefined && (
            <div className="card-holder">
                <h4>{`${playerTurn ? "Your turn" : "CPU turn"}`}</h4>
                < div className="plane-card" >
                    <h4 className="plane-name">{name != undefined ? name : "Plane"}</h4>
                    <div><img className="card-image" style={{ backgroundImage: `url(${localUrl})` }} /></div>
                    <div className="stats-div">

                        <p onClick={() => playerTurn && this.handleSelection("groundattack", playerCard, computerCard)}><span className="stat-header">Ground Attack:</span> {groundattack} / 10</p>
                        <p onClick={() => playerTurn && this.handleSelection("dogfight", playerCard, computerCard)}><span className="stat-header">Dogfight:</span> {dogfight} / 10</p>
                        <p onClick={() => playerTurn && this.handleSelection("production", playerCard, computerCard)}><span className="stat-header">Production:</span> {production}</p>
                        <p onClick={() => playerTurn && this.handleSelection("payload", playerCard, computerCard)}><span className="stat-header">Payload:</span> {payload} lbs</p>
                        <p onClick={() => playerTurn && this.handleSelection("topspeed", playerCard, computerCard)}><span className="stat-header">Top Speed:</span> {topspeed} mph</p>
                        <p onClick={() => playerTurn && this.handleSelection("range", playerCard, computerCard)}><span className="stat-header">Range:</span> {range} miles</p>
                    </div>
                </div >
            </div>
        );
    }

    handleSelection = (selection, playerCard, computerCard) => {
        const { setSelectedProperty } = this.props;
        setSelectedProperty(selection)
    }
}



const mapStateToProps = ({ deck: { players, decks, playerTurn, selectedProperty } }) => ({
    players,
    decks,
    playerTurn,
    selectedProperty
})

const mapDispatchToProps = dispatch => ({
    setSelectedProperty: (property) => dispatch(setSelectedProperty(property))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
