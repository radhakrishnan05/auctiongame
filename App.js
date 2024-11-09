// src/App.js
import React, { useState } from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import BidForm from './components/BidForm';

function App() {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Virat Kohli', basePrice: 100, currentBid: 0 },
    { id: 2, name: 'Rohit Sharma', basePrice: 90, currentBid: 0 },
    { id: 3, name: 'MS Dhoni', basePrice: 110, currentBid: 0 },
  ]);

  const placeBid = (id, bidAmount) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, currentBid: bidAmount } : player
      )
    );
  };

  return (
    <div className="App">
      <h1>Cricket Auction</h1>
      <PlayerList players={players} />
      <BidForm players={players} placeBid={placeBid} />
    </div>
  );
}

export default App;
