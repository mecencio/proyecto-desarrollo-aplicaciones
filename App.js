import React, { useState } from "react"
import { StyleSheet, View, Button } from "react-native"
import AddTasks from "./src/screens/AddTasks"
import ViewTasks from "./src/screens/ViewTasks"

export default function App() {
  const [view, setView] = useState(false);
  // Pending tasks
  const [tasksList, setTasksList] = useState([])
  // Complete tasks
  const [completeList, setCompleteList] = useState([])

  // const [fontLoaded] = useFonts()

  const viewTasks = () => {
    setView(!view);
  }

  return (
    <View style={styles.container}>
      {view ? <AddTasks tasksList={tasksList} setTasksList={setTasksList} /> : <ViewTasks tasksList={tasksList} setTasksList={setTasksList} completeList={completeList} setCompleteList={setCompleteList} />}
      <View style={styles.buttonContainer}>
          <Button title={view ? "SEE TASKS": "NEW TASK"} onPress={viewTasks}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
})