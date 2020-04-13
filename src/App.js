import React, { Component, Fragment } from 'react';
import './App.css';
import Card from "./components/card/Card";
import GameInfo from './components/gameInfo/GameInfo'
import { connect } from 'react-redux';
import { setPlayers, setDecks, checkWin, setSelectedProperty } from './redux/deck/deckActions';
import { initializeDecks } from './helpers/deckHelpers';



class App extends Component {
  componentDidMount() {
    const { setPlayers, setDecks } = this.props;
    setPlayers(["You", "CPU"]);
    const initiailizedDecks = initializeDecks();
    setDecks(initiailizedDecks)
  }

  render() {
    const { decks, winner, checkWin, setDecks, setSelectedProperty } = this.props;
    if (decks.length > 0) checkWin(decks);
    console.log(`WINNER: ${winner}`)
    return (
      <div className="App">
        {((decks.length > 0) && (decks[0].length > 0) && decks[1].length > 0) ?
          <Fragment>
            <Card />
            <GameInfo />
          </Fragment> :
          <div className="winner">
            <h2>{winner} wins!</h2>
            <div className="reset-button" onClick={() => {
              const initializedDecks = initializeDecks();
              setSelectedProperty('')
              setDecks(initializedDecks)
            }}>Play again</div>
          </div>
        }
      </div>
    );
  }
}


const mapStateToProps = ({ deck: { players, decks, playerTurn, winner } }) => ({
  players, decks, playerTurn, winner
})

const mapDispatchToProps = dispatch => ({
  setPlayers: (players) => dispatch(setPlayers(players)),
  setDecks: (decks) => dispatch(setDecks(decks)),
  checkWin: (decks) => dispatch(checkWin(decks)),
  setSelectedProperty: (selectedProperty) => dispatch(setSelectedProperty(selectedProperty))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);