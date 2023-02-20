import React from "react"
import TasksNavigator from "./src/navigation/TasksNavigator"
import { Provider } from "react-redux"
import store from "./src/store"

export default function App() {

  return (
  <Provider store={store}>
    <TasksNavigator />
  </Provider>
  )
}