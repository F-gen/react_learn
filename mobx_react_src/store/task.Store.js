
import { makeAutoObservable } from 'mobx'
class TaskStore {
  list = [
    {
      id: 1,
      name: '学习react',
      isDone: false
    },
    {
      id: 2,
      name: '搞定mobx',
      isDone: true
    }
  ]
  constructor() {
    makeAutoObservable(this)
  }
  // 单选操作
  changeCheck = (id, isDone) => {
    const item = this.list.find((item) => item.id == id)
    item.isDone = isDone
  }
  // 全选操作
  allcheck = (checked) => {
    this.list.forEach(item => item.isDone = checked)
  }
  // 计算属性 所有子项都选中 才是选中
  get isAll() {
    return this.list.every(item => item.isDone)
  }
  get isFinish() {
    return this.list.filter(item => item.isDone == true).length
  }
  // 删除
  delete(id) {
    this.list = this.list.filter(item => item.id !== id)
  }
  addTask = (task) => {
    this.list.push(task)
  }
}
export default TaskStore
