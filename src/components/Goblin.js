import React from 'react';

class Goblin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { causeTrouble: false };
    this.handleCauseTrouble = this.handleCauseTrouble.bind(this);
  }

  handleCauseTrouble() {
    console.log('Here comes trouble...')
    this.setState({ causeTrouble: true });
  }

  render() {
    if (this.state.causeTrouble) {
      // You can render any custom fallback UI
     throw new Error('Trouble!')
    }

    return (
      <React.Fragment>
        <span>I'm a goblin 😈. I can cause trouble.</span>
        <button onClick={this.handleCauseTrouble}>
          Cause Trouble
        </button>

      </React.Fragment>
    )
  }
}

export default Goblin;
