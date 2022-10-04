import React from "react";

// 父传子 props 函数
// 子传父  子组件调用父传来的函数， 并且把传递的值当参数

// Son 子组件


//函数式的Son
function Son(props) {
  // props 对象  存父组件传递的数据
  // 解构  const { list } = props    或者 在组件接收处解构  function Son({list,userInfo,getMes,child}) 
  const { getSones } = props
  function emitfather() {
    getSones('子传父')
  }
  return (
    <>
      <div>函数：子组件</div>
      <button onClick={emitfather}>传递：子-父</button>
    </>
  )
}


// App 父组件 
class App extends React.Component {
  state = {

    list: [1, 2, 3],

  }
  getSones = (son) => {
    console.log(son);
  }
  render() {
    return (
      <div>
        {/*子组件上绑定数据  属性名自定义  */}
        <Son getSones={this.getSones}> </Son>

      </div>
    )
  }
}

export default App;
