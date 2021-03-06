import React, {Component} from 'react';
import Game from './Game';

type Props = {};
class App extends Component<Props> {
  state = {
    gameId: 1,
  };

  resetGame = () => {
    this.setState((prevState) => {
      return { gameId: prevState.gameId + 1 };
    });
  };
  render() {
    return (
      <Game 
        key={this.state.gameId}
        onPlayAgain={this.resetGame}
        randomNumberCount={6} 
        initialSeconds={10}
      />
    );
  }
}

export default App;
