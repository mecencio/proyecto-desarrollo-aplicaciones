import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import AddItem from "../components/AddItem"

const AddTasks = ({ tasksList, setTasksList }) => {
    const [newTask, setNewTask] = useState('');

    const addItem = () => {
        if (newTask) {
            setTasksList(prevState => [...prevState, newTask]);
            setNewTask('');
        }
    }

    const onHandlerChangeItem = (task) => {
        setNewTask(task)
    }

    const [fontLoaded] = useFonts({
        pacifico: require('../../assets/Fonts/LeagueSpartan-Regular.ttf'),
    })

    if (!fontLoaded) {return <AppLoading />}

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Tasks</Text>
                <AddItem
                    onChange={onHandlerChangeItem}
                    textValue={newTask}
                    onAddItem={addItem}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    titleContainer: {
        height: 200,
        paddingHorizontal: 30,
        paddingTop: 80,
    },
    title: {
        fontFamily: 'pacifico',
        marginBottom: 30,
        fontSize: 30,
        fontWeight: "500",
        color: "#3b82f6",
        alignSelf: "center"
    },
})

export default AddTasks;