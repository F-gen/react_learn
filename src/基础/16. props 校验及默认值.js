
import React from "react";
import PropTypes from 'prop-types'
function Test({ list, pageSize = 10 }) {
  return (
    <div>
      {list.map((item, index) => <p key={index}>{item}</p>)}
      {pageSize}
    </div>
  );
}
// props校验
Test.propTypes = {
  list: PropTypes.array.isRequired
}
// 函数 默认值 法一   ，法二 写在结构处
// Test.defaultProps = {
//   pageSize: 10
// }


class Test1 extends React.Component {
  static defaultProps = {
    pageSize: 10
  }
  render() {
    return (

      <>
        <div>{this.props.pageSize}</div>
      </>
    )
  }
}
// 类 方式 默认值法一，法二声明static defaultProps
// Test1.defaultProps = {
//   pageSize: 11
// }
// App 父组件 
class App extends React.Component {


  render() {
    return (
      <>
        <Test list={[1, 2, 3]} pageSize={20}></Test>

        <br />
        <Test1 pageSize={21}></Test1>
      </>
    )
  }
}

export default App;
