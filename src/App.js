
// 表单-受控组件
import React from "react";
class Counter extends React.Component {
  state = {
    message: 'this is message'
  }
  inputChange = (e) => {
    console.log('inputChange');
    // 修改state中的message
    this.setState({
      message: e.target.value
    })
  }
  render() {
    return (
      // 绑定input的value值 
      // 绑定input的onChange事件
      <input type='text' value={this.state.message} onChange={this.inputChange} ></input>
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
