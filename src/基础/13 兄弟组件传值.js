//  先子传父  再 父传子

import React from "react";



//函数式的SoA
function Sona({ msg }) {
  const a = '我是A组件'
  return (
    <>
      <div>函数：子组件A,这里说接受的B组件信息：{msg}</div>

    </>
  )
}

//函数式的SonB
function Sonb({ getmsg }) {
  const b = '我是B组件'
  function sendmsg() {
    getmsg(b)
  }
  return (
    <>
      <div >函数：子组件B</div>
      <button onClick={sendmsg}>点击发送信息给A组件</button>
    </>
  )
}

// App 父组件 
class App extends React.Component {
  state = {
    savemsg: '初始值'
  }
  getB = (msg) => {
    this.setState({
      savemsg: msg
    })


  }
  render() {
    return (
      <div>
        <Sona msg={this.state.savemsg}></Sona>
        <Sonb getmsg={this.getB} ></Sonb>

      </div>
    )
  }
}

export default App;
