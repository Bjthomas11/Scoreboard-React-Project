import React, { Component } from "react";

// Renered as class
class AddPlayerForm extends Component {
  // create.Ref methods is easier and quicker to get value from forms
  playerInput = React.createRef();

  handleSubmitButton = e => {
    e.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  };

  render() {
    console.log(this.playerInput);
    // console.log(this.state.value);
    return (
      <form onSubmit={this.handleSubmitButton}>
        <input
          type="text"
          ref={this.playerInput}
          placeholder="Enter a player name"
        />

        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

// Rendering as a function
// const AddPlayerForm = ({ addPlayer }) => {
//   let playerInput = React.createRef();

//   let handleSubmitButton = e => {
//     e.preventDefault();
//     addPlayer(playerInput.current.value);
//     e.currentTarget.reset();
//   };

//   return (
//     <form onSubmit={handleSubmitButton}>
//       <input type="text" ref={playerInput} placeholder="Enter a player name" />

//       <input type="submit" value="Add Player" />
//     </form>
//   );
// };

export default AddPlayerForm;
