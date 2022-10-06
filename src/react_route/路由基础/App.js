// 引入组件
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Login from "./Login"
function App() {
  return (
    // 声明非hash模式路由  hash：HashRouter， history： BrowerRouter
    <BrowserRouter>
      {/* 指定跳转组件 to配置路由地址 */}
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>

      {/* 路由出口，路由对应等组件会进行渲染 */}
      <Routes>
        {/* 路径与组件对应关系，path代表路径，element配置路由对应组件 */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about/:id" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
