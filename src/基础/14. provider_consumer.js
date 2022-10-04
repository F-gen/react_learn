
import React, { createContext } from "react";
//1. 引入
const { Provider, Consumer } = createContext();
// app ->A->B
// app->c

//函数式的SoA
function Sona() {

  return (
    <>
      <div>函数：子组件A  <Sonb></Sonb>  </div>

    </>
  )
}

//函数式的SonB
function Sonb() {

  return (
    <>
      {/* 3. 使用 */}
      <Consumer>
        {value => <div >函数：子组件B ,得到value:{value}</div>}

      </Consumer>
    </>
  )
}

// App 父组件 
class App extends React.Component {

  state = {
    msg: 'chuanzhi'
  }

  render() {
    return (
      // 2 包裹provider
      <Provider value={this.state.msg}>
        <div>
          <Sona ></Sona>
        </div>
      </Provider>
    )
  }
}

export default App;
