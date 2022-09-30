import React from "react";

// Son 子组件


//函数式的Son
function Son(props) {
  // props 对象  存父组件传递的数据
  return (
    <>

      <div>函数：子组件 ，{props.list} {props.list.map(item => <p key={item}>{item}</p>)}</div>
    </>
  )
}

// 类组件Son
class SonC extends React.Component {
  render() {
    return (
      <div>Class 子组件,{this.props.msg}</div>
    )
  }
}


// App 父组件 
class App extends React.Component {

  state = {
    message: 'this is a message',
    list: [1, 2, 3],
    userInfo: {
      name: 'zhangsan',
      age: 18
    }
  }

  render() {
    return (
      <div>
        {/*子组件上绑定数据  属性名自定义  */}
        <Son msg={this.state.message} list={this.state.list} userInfo={this.state.userInfo}  ></Son>
        <SonC msg={this.state.message} />
      </div>
    )
  }
}

export default App;
