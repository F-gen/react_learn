import React from 'react';

class TestComponent extends React.Component {
  state = {
    name: 'space'
  }
  changeName = () => {
    this.setState({
      name: 'spaceChange'
    })
  }
  render() {
    return (
      <div>
        <h1>Test Component,name: {this.state.name}</h1>
        <button onClick={this.changeName}>TestBTN</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <TestComponent></TestComponent>
    </div>
  );
}

export default App;
