
// 列表渲染
// 依旧需要可以
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]
function App() {
  return (
    <div className="App">
      <ul>
        {songs.map((i) => <li key={i.id}>{i.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
