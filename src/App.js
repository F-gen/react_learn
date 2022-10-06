import { useStore } from './store/index'
import { observer } from 'mobx-react-lite'
function App() {
  const { counterStore } = useStore()
  return (
    <>
      <div>
        {/* store 中count 渲染，修改数据 */}
        Count:  {counterStore.count}
        <button onClick={counterStore.addCount}>Add</button>

        {/* 使用计算属性 */}
        compute:  {counterStore.filterList.map(item => <div key={item}>{item}</div>)}
        <button onClick={counterStore.addList}>edit_list</button>
      </div>
    </>
  )
}
export default observer(App)
