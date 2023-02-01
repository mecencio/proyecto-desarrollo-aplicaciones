import React, { useState } from "react"
import { StyleSheet, Button, Text, View, FlatList } from "react-native"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Stack, Divider, Backdrop, FAB } from "@react-native-material/core";
import ModalAddTask from "../components/ModalAddTask";
import ModalNewList from "../components/ModalNewList";

const ViewTasks = ({ 
        list, 
        newList,
        deleteList,
        tasksList, 
        setTasksList, 
        completeList, 
        setCompleteList, 
        deleteTask,
        deleteCompleteTask 
    }) => {
    const [revealed, setRevealed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false)
    const [modalListVisible, setModalListVisible] = useState(false)

    const HandlerNewList = (list) => {
        newList(list);
        setModalListVisible(false);
    }
    //Pending
    const HandlerAddTask = (task) => {
        if (!tasksList.includes(task)) {
            setTasksList(list, task);
        }
        setModalVisible(false);
    }

    const onHandlerComplete = (task) => {
        setCompleteList(list, task);
    }

    const onHandlerDelete = (task) => {
        deleteTask(list, task);
    }

    // Complete
    const onHandlerIncomplete = (task) => {
        deleteCompleteTask(list, task);
        setTasksList(list, task);
    }

    const onHandlerDeleteComplete = (task) => {
        deleteCompleteTask(list, task);
    }

    //Renders
    const renderItem = ({ item }) => (
        <View style={styles.renderItemContainer}>
            <Icon name="checkbox-blank-circle-outline" size={18} onPress={() => onHandlerComplete(item)}/>
            <Text>{item}</Text>
            <Icon name="delete" size={18} onPress={() => onHandlerDelete(item)}/>
        </View>
    )

    const renderItemComplete = ({ item }) => (
        <View style={styles.renderItemContainer}>
            <Icon name="check-circle-outline" size={18} onPress={() => onHandlerIncomplete(item)}/>
            <Text>{item}</Text>
            <Icon name="delete" size={18} onPress={() => onHandlerDeleteComplete(item)} />
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <View style={list != "General" ? styles.buttonGeneral : styles.buttonSpecial }><Button title="New list" onPress={() => setModalListVisible(true)} /></View>
                {list != "General" && <View style={styles.buttonGeneral}><Button title="Delete List" onPress={() => deleteList(list)} color="#f44336" /></View>}
            </View>

            {/* Pending tasks */}
            <View style={styles.listContainer}>
                <Text style={styles.subtitle}>Pending Tasks</Text>
                <FlatList
                    data={tasksList}
                    renderItem={renderItem}
                    keyExtractor={item => item}
                    style={styles.listItem}
                />
            </View>

            {/* Complete tasks */}
            <Divider style={{ marginTop: 60 }} leadingInset={16} />
            <Backdrop style={ revealed ? styles.backdropContainerExpanded : styles.backdropContainer}
                revealed={revealed}
                header={
                    <View style={styles.backdropListContainer}>
                        <Icon name={revealed ? "menu-down" : "menu-right"} style={{ color: "#3b8ff6", paddingEnd: 5 }} size={20} onPress={() => setRevealed(prevState => !prevState)} />
                        <Text style={styles.subtitle} onPress={() => setRevealed(prevState => !prevState)}>Complete Tasks</Text>
                    </View>
                }
                backLayer={
                    <FlatList
                        data={completeList}
                        renderItem={renderItemComplete}
                        keyExtractor={item => item}
                        style={styles.listItem}
                    />
                }
            >
            </Backdrop>

            <Stack center>
                <FAB icon={props => <Icon name="plus" style={{color: "#FFF"}} />} style={{backgroundColor: "#3b8ff6"}} onPress={() => setModalVisible(true)}/>
            </Stack>
            <ModalAddTask
                isVisible={modalVisible}
                actionComplete={HandlerAddTask}
                onDismissModal={setModalVisible}
            />
            <ModalNewList
                isVisible={modalListVisible}
                actionComplete={HandlerNewList}
                onDismissModal={setModalListVisible}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: "#FFF",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row"
    },
    buttonGeneral: {
        width: "50%"
    },
    buttonSpecial: {
        width: "100%"
    },
    subtitle: {
        marginBottom: 10,
        fontSize: 15,
        fontWeight: "300",
        color: "#3b8ff6",
        alignSelf: "center"
    },
    listContainer: {
        flex: 4,
        marginTop: 40,
        padding: 3,
    },
    backdropContainer: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    backdropContainerExpanded: {
        flex: 3,
        backgroundColor: "#FFF",
    },
    backdropListContainer:{
        flexDirection: "row",
        justifyContent: "center",
    },
    renderItemContainer: {
        flexDirection: "row",
        marginBottom: 30,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
})

export default ViewTasks;