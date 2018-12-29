import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Brian",
        score: 0,
        id: 1
      },
      {
        name: "Tom Brady",
        score: 0,
        id: 2
      },
      {
        name: "Gronk",
        score: 0,
        id: 3
      },
      {
        name: "LeBron James",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (index, difference) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += difference)
    }));
  };

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          // represents all exisiting players array
          ...prevState.players,
          {
            // name: name
            name,
            score: 0,
            id: (this.prevPlayerId += 1)
          }
        ]
      };
    });
  };

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  // player id counter
  prevPlayerId = 4;

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            index={index}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}
          />
        ))}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
