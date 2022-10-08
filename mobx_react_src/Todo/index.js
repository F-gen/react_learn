import './index.css'
import { useStore } from '../store'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import uuid from 'react-uuid'
function Task() {
  const { taskStore } = useStore()
  // const [checked,setCheck] = useState()
  // 单选受控 store 中维护 input 只需把e.target.value  交给store让它来修改 
  function onchagne(id, e) {
    taskStore.changeCheck(id, e.target.checked)
  }
  function allChange(e) {
    // console.log(e, 'e');
    taskStore.allcheck(e.target.checked)
  }
  const [taskValue, setTask] = useState()
  function add(e) {
    let item = {
      id: uuid(),
      name: taskValue,
      isDone: false

    }

    if (e.keyCode == 13) {

      taskStore.addTask(item)
      setTask('')
    }

  }
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
          value={taskValue}
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={add}
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={taskStore.isAll}
          onChange={allChange}
        />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {taskStore.list.map(item =>
            <li
              className={item.isDone ? 'todo completed' : 'todo'}
              key={item.id}

            >
              <div className="view">
                <input className="toggle" type="checkbox" checked={item.isDone} onChange={(e) => onchagne(item.id, e)} />
                <label >{item.name}</label>
                <button className="destroy" onClick={() => taskStore.delete(item.id)} ></button>
              </div>
            </li>)}


        </ul>
      </section>
      <footer className='footer'>
        <span className='todo-count'>
          任务总数:{taskStore.list.length},已完成:{taskStore.isFinish}
        </span>
      </footer>
    </section>

  )
}

export default observer(Task)
