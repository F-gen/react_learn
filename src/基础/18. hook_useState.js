
// 快速使用
// 1. 导入 useState 函数
// 2. 调用 useState 函数，并传入状态的初始值
// 3. 从useState函数的返回值中，拿到状态和修改状态的方法
// 4. 在JSX中展示状态
// 5. 调用修改状态的方法更新状态


// 状态的读取和修改  const [count, setCount] = useState(0)
//  1. useState传来的参数，作为count 初始值
//2. 【count，setCount】 这里写法⬆是解构赋值  useState 返回的是数组
// 【 名字可自定义 保持语义化】，顺序不能换
// 3.  setCount 是修改count的方法，不能直接修改原值，绑在一起的 setCount 只能改count值


// 组件更新
// 当调用setCount方法时，更新过程
// 首次渲染，内部的代码会被执行一次
// 其中，useState会跟着执行  ！！初始值只在首次渲染时生效
// 更新渲染， setCount 都会更新
// 1. app组件会再次渲染 这个函数 再次执行
// 2， useState 会再次执行，得到新的count值 不是0 而是新的1 模版会用新值渲染
//注意：useState 的初始值(参数)只会在组件第一次渲染时生效。也就是说，以后的每次渲染，
//     useState 获取到都是最新的状态值，React 组件会记住每次最新的状态值
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [list, setList] = useState([])
  function test() {
    setCount(count + 1)
    setFlag(!flag)
    setList([1, 2, 3])
  }
  return (
    <div>
      <div>count:{count},flag:{flag},list:{list.join('-')}</div>  <button onClick={test}>+：{count}</button>
    </div>
  )

}

export default App
