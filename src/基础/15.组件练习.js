
import React, { createContext } from "react";
function Lisitem({ name, price, info, id, del }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <p>{info}</p>
      <button onClick={() => del(id)}>Delete</button>
    </div>
  );
}

// App 父组件 
class App extends React.Component {

  state = {
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
    ]
  }
  delHandler = (id) => {
    this.setState({
      list: this.state.list.filter(items => items.id !== id)
    })
  }
  render() {
    return (
      <>
        {this.state.list.map(items => <Lisitem key={items.id} {...items} del={this.delHandler} />)}
      </>
    )
  }
}

export default App;
