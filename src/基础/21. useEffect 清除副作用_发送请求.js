import { useEffect, useState } from "react"
// import axios from "axios"
// useEffect  副作用，组件销毁后还会执行setinterval  ，需销毁副作用 逻辑后 return 
// function Test() {
//   useEffect(() => {
//     let timer = setInterval(() => {
//       console.log('setInterval');
//     }, 1000)
//     return () => {
//       clearInterval(timer)
//     }
//   }, [])
//   return (
//     <div>test</div>
//   )
// }



// function App() {

//   const [flag, setFlag] = useState(true)
//   return (
//     <div >
//       {flag ? <Test /> : null}
//       <button onClick={() => setFlag(!flag)}>Switch</button>
//     </div>
//   )
// }
// export default App 




// 类组件 发送请求  componentDidMount 
// 初始化dom完毕执行yc

// useEffect
// 1. 不加依赖项 - 初始化+重新渲染
// 2. 加空数组 - 初始化一次
// 3. 加特定依赖x - 【count，name】  -首次执行+ 任意变化
function App() {

  useEffect(() => {
    // async function fetchData() {
    //   const res = await fetch('http://geek.itheima.net/v1_0/channels')
    //   console.log(res)
    // }
    // fetchData()
  }, [])
  return (
    <div >

    </div>
  )
}
export default App 
