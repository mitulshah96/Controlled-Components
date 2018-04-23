import React, { Component } from "react";
import "./App.css";

//Controlled Components
/* React component that renders a form also controls what happens in that form on subsequent user 
input. An input form element whose value is controlled by React in this way is called a 
“controlled component”. */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      selectedvalue: "Mango"
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value.toUpperCase()
    });
  }
  handleSelect(e) {
    this.setState({
      selectedvalue: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <br /> <br /> <br /> <br />
          <select
            value={this.state.selectedvalue}
            onChange={e => this.handleSelect(e)}
          >
            <option value="Grapes">Grapes</option>
            <option value="Oranges">Oranges</option>
            <option value="Mango">Mango</option>
            <option value="Dragon Fruit">Dragon Fruit</option>
            <option value="Kivi">Kivi</option>
          </select>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default App;
