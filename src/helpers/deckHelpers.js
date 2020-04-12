import PLANE_DATA from '../data/planeData';

export const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

export const initializeDecks = () => {
    const shuffledData = shuffleDeck(PLANE_DATA)
    const playArr = shuffledData.slice(0, 15)
    const compArr = shuffledData.slice(15, shuffledData.length)
    return [playArr, compArr];
}

export const updateDecksWin = (winner, loser) => {
    const winDeck = [...winner];
    const loseDeck = [...loser];
    const card = loseDeck.shift();
    winDeck.push(card);
    return [winDeck, loseDeck]
}

export const updateDecksLoss = (loser, winner) => {
    const winDeck = [...winner];
    const loseDeck = [...loser];
    const card = loseDeck.shift();
    winDeck.push(card);
    return [loseDeck, winDeck]
}