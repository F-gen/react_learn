
import { useWindScoll } from './Hooks/useWindowScoll'
import { useLocalStorage } from './Hooks/useLocalstorage'
function App() {
  const [y] = useWindScoll()
  const [message, setMessage] = useLocalStorage('hook-key', 'hello')
  setTimeout(() => {
    setMessage('world')
  }, 5000)
  return (
    <div style={{ height: '1000px' }}>
      {y},--{message}
    </div>
  )
}
export default App
