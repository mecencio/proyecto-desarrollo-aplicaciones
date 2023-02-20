import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ViewTasks from "../screens/ViewTasks";
import { useSelector, useDispatch } from "react-redux";
import { newList, deleteList } from "../store/actions/lists.action";
import { newTask, completeTask, deleteTask, deleteCompletedTask } from "../store/actions/task.action";

const Tab = createMaterialTopTabNavigator();

export default TasksNavigator = () => {
    const dispatch = useDispatch();
    const lists = useSelector((state) => state.list);
    const tasks = useSelector(state => state.task);

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                {lists.map(item => 
                    <Tab.Screen 
                        key={item} 
                        name={item.title}
                        options={{
                            tabBarActiveTintColor: "#3b8ff6",
                            tabBarLabelStyle: {fontSize: 16},
                            tabBarStyle: {marginTop: 5}
                        }}
                    >
                        {() => <ViewTasks 
                                    newList={title => dispatch(newList(title))}
                                    deleteList={title => dispatch(deleteList(title))}
                                    list={item.title} 
                                    tasksList={item.pending} 
                                    setTasksList={(title, task) => dispatch(newTask(title, task))} 
                                    completeList={item.completed} 
                                    setCompleteList={(title, task) => dispatch(completeTask(title, task))} 
                                    deleteTask={(title, task) => dispatch(deleteTask(title, task))}
                                    deleteCompleteTask={(title, task) => dispatch(deleteCompletedTask(title, task))}
                                />}
                    </Tab.Screen>
                )}
            </Tab.Navigator>
        </NavigationContainer>
    )
}

