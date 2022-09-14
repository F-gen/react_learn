
// 样式控制  1. 行内 绑定style 2. 类名样式
// 动态类名 三元
import './app.css';
const style = {
  color: 'red',
  fontSize: '22px'
}
function App() {
  return (
    <div className="App">
      <span style={{ color: 'pink', fontSize: '22px' }}>
        style
      </span>
      <span style={style}>
        style_建议写法
      </span>
      <span className='test'>
        className写法
      </span>
      <span className={false ? 'test' : ''}>
        动态类名 三元
      </span>

    </div >
  );
}

export default App;
