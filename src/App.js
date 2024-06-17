import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBall: false,
      ballPosition: 0
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.keyCode === 39) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5
      }));
    }
  };

  buttonClickHandler = () => {
    this.setState({ showBall: true });
  };

  renderChoice() {
    if (this.state.showBall) {
      return (
        <div
          className="ball"
          style={{ left: `${this.state.ballPosition}px`, position: 'absolute' }}
        ></div>
      );
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderChoice()}
      </div>
    );
  }
}

export default App;
