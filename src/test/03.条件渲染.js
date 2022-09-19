
// 条件渲染
// 三元 | 逻辑表达式
const flag = true

function App() {
  return (
    <div className="App">
      {flag ? (
        <div>
          <span>这是条件表达式</span>
        </div>
      ) : null}
      {true && <span>前面为真才渲染</span>}
    </div>
  );
}

export default App;
