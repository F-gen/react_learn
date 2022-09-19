import React from 'react';
// 函数组件创建渲染
// 组件首字母大写
// 有返回值

function Hello() {
  // 函数绑定事件
  const clickHand = (e, msg) => {
    console.log('click', e, msg);
  }
  return <div onClick={(e) => clickHand(e, 'this is msg')}>Hello</div>
}

// 类组件创建 渲染
// 大小 托峰 
// 继承 React.Component
// render 方法

class HelloComponent extends React.Component {
  // 类绑定事件   标准写法 避免this 指向问题
  clickHands = () => {
    console.log("classClick");
  }
  render() {
    return (
      <div>

        <h1 onClick={this.clickHands}>Hello Component</h1>
      </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <Hello> </Hello>
      <HelloComponent></HelloComponent>
    </div>
  );
}

export default App;
