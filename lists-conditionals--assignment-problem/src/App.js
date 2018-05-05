import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputArray: []
  };

  changeInputHandler = (event) => {
    const string = event.target.value;
    const string_array = string.split('');
    this.setState(
      {
        inputArray : string_array
      }
    );
  }

  deleteCharComponentHandler = (index) => {
    const inputArray = [...this.state.inputArray];
    inputArray.splice(index, 1);
    this.setState({inputArray: inputArray});
  }

  render() {
    const CharComponentList = this.state.inputArray.map( (char, index) => {
      return <CharComponent 
      key={index} 
      char={char}
      click={()=>this.deleteCharComponentHandler(index)} 
      />
    });

    const inputValue = this.state.inputArray.join('');

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input value={inputValue} onChange={(event) => this.changeInputHandler(event)} />
        <p>{this.state.inputArray.length}</p>

        <ValidationComponent inputLength={this.state.inputArray.length} />
        {CharComponentList}
      </div>
    );
  }
}

export default App;
