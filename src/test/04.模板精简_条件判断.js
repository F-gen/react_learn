//  复杂多分支逻辑 写严格函数   尽量保存精简

// 状态 type 123
// 1 h1   2 h2  3h3 
const getHtag = (type) => {
  if (type === 1) {
    return <h1>this H1</h1>
  } else if (type === 2) {
    return <h2>this H2</h2>
  } else if (type === 3) {
    return <h3>this H3</h3>

  }
}

function App() {
  return (
    <div className="App">
      {getHtag(1)}
      {getHtag(2)}
      {getHtag(3)}
    </div>
  );
}

export default App;
