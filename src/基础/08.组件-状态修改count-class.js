import React from "react";

class Counter extends React.Component {

  state = {
    count: 0
  }
  changeCount = () => {
    // 修改state
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>  <button onClick={this.changeCount}>{this.state.count}</button>
        <h1>{this.state.count}</h1></div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

export default App;
