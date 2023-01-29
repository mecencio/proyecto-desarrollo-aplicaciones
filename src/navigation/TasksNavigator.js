import React, { useState } from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ViewTasks from "../screens/ViewTasks";
import AddTasks from "../screens/AddTasks";

const Tab = createMaterialTopTabNavigator();

export default TasksNavigator = () => {
    // Pending tasks
    const [tasksList, setTasksList] = useState([])
    // Complete tasks
    const [completeList, setCompleteList] = useState([])

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home">{() => <ViewTasks tasksList={tasksList} setTasksList={setTasksList} completeList={completeList} setCompleteList={setCompleteList} />}</Tab.Screen>
                <Tab.Screen name="New">{() => <AddTasks tasksList={tasksList} setTasksList={setTasksList}/> }</Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

