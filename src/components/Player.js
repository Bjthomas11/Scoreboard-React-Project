import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

// If your component’s render() method renders the same result given the same props and state, you can use PureComponent for a performance boost in some cases.
class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  };

  render() {
    // deconstructing variables
    const { removePlayer, name, id, score, index, changeScore } = this.props;
    console.log(this.props.name + " rendered");

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon isHighScore={this.props.isHighScore} />
          {name}
        </span>

        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;
