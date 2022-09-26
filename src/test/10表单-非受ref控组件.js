
// 表单-非受控组件
import React, { createRef } from "react";

class Counter extends React.Component {
  msgRef = createRef()
  state = {
    message: 'this is message'
  }
  getValue = () => {
    console.log(this.msgRef.current.value);


  }
  render() {
    return (
      // 绑定input的value值 
      // 绑定input的onChange事件
      <>
        <input type='text' ref={this.msgRef} />
        <button onClick={this.getValue}>点击获取输入框值</button>
      </>
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
