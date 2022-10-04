import React from "react";

class App extends React.Component {
  // 挂载 construct render componentDidMount
  constructor() {
    super()
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
    // ajax 请求
  }
  // 更新 componentDidUpdate render
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  state = {
    count: 0
  }
  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log('render');
    return (
      <>
        this is render
        <button onClick={this.add}>count加 render会触发： {this.state.count}</button>
      </>
    )
  }
}

export default App;

