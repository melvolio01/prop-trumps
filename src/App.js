import React, { Component, Fragment } from 'react';
import './App.css';
import Card from "./components/card/Card";
import GameInfo from './components/gameInfo/GameInfo'
import { connect } from 'react-redux';
import { setPlayers, setDecks } from './redux/deck/deckActions';
import { initializeDecks } from './helpers/deckHelpers';



class App extends Component {
  componentDidMount() {
    const { setPlayers, setDecks } = this.props;
    setPlayers(["You", "CPU"]);
    const initiailizedDecks = initializeDecks();
    setDecks(initiailizedDecks)
  }

  render() {
    const { decks } = this.props;
    console.log(decks)
    return (
      <div className="App">
        {decks.length > 0 &&
          <Fragment>
            <Card />
            <GameInfo />
          </Fragment>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ deck: { players, decks, playerTurn } }) => ({
  players, decks, playerTurn
})

const mapDispatchToProps = dispatch => ({
  setPlayers: (players) => dispatch(setPlayers(players)),
  setDecks: (decks) => dispatch(setDecks(decks))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);