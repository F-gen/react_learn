


import { useState, useEffect } from 'react'

// 修改数据后，把count放在标题中

// 1. 导入 useEffect 函数
// 2. 调用 useEffect 函数，并传入回调函数
// 3. 在回调函数中编写副作用处理（dom操作）
// 4. 修改数据状态
// 5. 检测副作用是否生效

// 依赖项控制执行时机

// 1. 默认状态 （无依赖项
// 组件首次渲染执行一次，等每次数据更新时都会重新执行

//2 空数组，只会在首次渲染执行一次

//3 添加特定依赖性，[count]  
// 组件初始化执行，特定项变化再执行

// 4. useEffect 回调函数中用到的数据（比如，count）就是依赖数据，就应该出现在依赖项数组中，如果不添加依赖项就会有bug出现
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('zs')
  useEffect(() => {
    // 定义副作用
    console.log('副作用执行了');
    document.title = count
  }, [count])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} >btn</button>
      <button onClick={() => setName('cp')} >btn"{name}</button>
    </div>
  )

}

export default App
