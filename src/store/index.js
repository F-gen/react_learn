
import React from 'react'
import { ListStore } from './List'
import { CounterStore } from './counter'
class RootStore {
  constructor() {
    this.counterStore = new CounterStore(this)
    this.listStore = new ListStore(this)
  }
}
const root = new RootStore()

const StoreContext = React.createContext(root)

const useStore = () => React.useContext(StoreContext)
export { useStore }
