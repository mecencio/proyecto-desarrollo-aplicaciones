import React, { useState } from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ViewTasks from "../screens/ViewTasks";

const Tab = createMaterialTopTabNavigator();

export default TasksNavigator = () => {
    const [arrayList, setArrayList] = useState([
        {title: "General", pending: ['Limpiar vidrios'], completed: []},
        {title: "Coder", pending: ['Valorar la clase', 'Realizar entrega'], completed: ['Asistir a clase']},
    ]);

    const HandlerNewList = (list) => {
        if (!arrayList.find(item => item.title == list)) {
            setArrayList(prevState => [...prevState, {title: list, pending: [], completed: []}])
        }
    }

    const HandlerDeleteList = (list) => {
        const auxState = arrayList;
        // La lista debe existir
        // La lista debe ser distinta a general
        if (list!="General" && auxState.find(item => item.title == list)) {
            const index = auxState.findIndex(item => item.title == list)
            if (index >= 0) {
                auxState.splice(index, 1);
            }
        }
        setArrayList([...auxState]);
    }

    const setTasksList = (list, task) => {
        const auxState = arrayList;
        //La lista debe existir
        //Los pendientes de la lista no deben contener una tarea con el mismo nombre
        //Las tareas completadasno deben contener una tarea con el mismo nombre
        if (
            auxState.find(item => item.title == list) && 
            !auxState.find(item => item.title == list).pending.includes(task) && 
            !auxState.find(item => item.title == list).completed.includes(task)
        ) {
            auxState.find(item => item.title == list).pending.push(task)
        }
        setArrayList([...auxState]);
    }
    const setCompleteList = (list, task) => {
        const auxState = arrayList;
        //La lista debe existir
        //Las tareas completadasno deben contener una tarea con el mismo nombre
        if (auxState.find(item => item.title == list) && !auxState.find(item => item.title == list).completed.includes(task)) {
            const index = auxState.find(item => item.title == list).pending.findIndex(item => item == task);
            if (index >= 0) {
                auxState.find(item => item.title == list).pending.splice(index, 1);
            }
            auxState.find(item => item.title == list).completed.push(task)
        }
        setArrayList([...auxState]);
    }

    const deleteTask = (list, task) => {
        const auxState = arrayList;
        // La lista debe existir
        if (auxState.find(item => item.title == list)) {
            const index = auxState.find(item => item.title == list).pending.findIndex(item => item == task)
            if (index >= 0) {
                auxState.find(item => item.title == list).pending.splice(index, 1);
            }
        }
        setArrayList([...auxState]);
    }

    const deleteCompleteTask = (list, task) => {
        const auxState = arrayList;
        // La lista debe existir
        if (auxState.find(item => item.title == list)) {
            const index = auxState.find(item => item.title == list).completed.findIndex(item => item == task)
            if (index >= 0) {
                auxState.find(item => item.title == list).completed.splice(index, 1);
            }
        }
        setArrayList([...auxState]);
    }

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                {arrayList.map(item => 
                    <Tab.Screen key={item} name={item.title}>
                        {() => <ViewTasks 
                                    newList={HandlerNewList}
                                    deleteList={HandlerDeleteList}
                                    list={item.title} 
                                    tasksList={item.pending} 
                                    setTasksList={setTasksList} 
                                    completeList={item.completed} 
                                    setCompleteList={setCompleteList} 
                                    deleteTask={deleteTask}
                                    deleteCompleteTask={deleteCompleteTask}
                                />}
                    </Tab.Screen>
                )}
            </Tab.Navigator>
        </NavigationContainer>
    )
}

