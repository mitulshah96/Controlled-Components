import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked,
  // and <select> and <textarea> supports defaultValue.

  // In React, an <input type="file" /> is always an uncontrolled component because
  //  its value can only be set by a user, and not programmatically.

  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
  }
  handleInputChange(e) {
    const target = e.target;
    console.log(target);
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log(value);
    const name = target.name;
    console.log(name);

    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.input.value);
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={e => this.handleInputChange(e)}
            />
          </label>
          <br /> <br /> <br /> <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={e => this.handleInputChange(e)}
            />
          </label>
          <label>
            uncontrolled Component
            <input
              type="text"
              defaultValue="Shah"
              ref={input => (this.input = input)}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default App;
