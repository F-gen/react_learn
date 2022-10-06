
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Login from './Login'
import Board from './Board'
import Article from './Article'
import NotFound from './NotFound'
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            {/*默认二级  index 属性*/}
            <Route index element={<Board></Board>}></Route>
            <Route path='article' element={<Article></Article>}></Route>
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
