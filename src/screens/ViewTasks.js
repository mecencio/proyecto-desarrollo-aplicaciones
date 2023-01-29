import React, { useState } from "react"
import { StyleSheet, Text, View, Button, FlatList } from "react-native"
import Modal from "../components/Modal"
import ModalComplete from "../components/ModalComplete"

const ViewTasks = ({ tasksList, setTasksList, completeList, setCompleteList, navigation }) => {

    // Pending tasks
    const [itemSelected, setItemSelected] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    // Complete tasks
    const [itemCompleteSelected, setItemCompleteSelected] = useState("")
    const [modalCompleteVisible, setModalCompleteVisible] = useState(false)

    //Pending
    const HandlerModal = (item) => {
        setItemSelected(item)
        setModalVisible(true)
    }

    const onHandlerComplete = (item) => {
        setTasksList(prevState => prevState.filter(element => element !== item))
        setCompleteList(prevState => [...prevState, item])
        setModalVisible(!modalVisible)
    }

    const onHandlerDelete = (item) => {
        setTasksList(prevState => prevState.filter(element => element !== item))
        setModalVisible(!modalVisible)
    }

    // Complete
    const HandlerModalComplete = (item) => {
        setItemCompleteSelected(item)
        setModalCompleteVisible(true)
    }

    const onHandlerDeleteComplete = (item) => {
        setCompleteList(prevState => prevState.filter(element => element !== item))
        setModalCompleteVisible(!modalCompleteVisible)
    }

    //Renders
    const renderItem = ({ item }) => (
        <View style={styles.renderItemContainer}>
            <Text>{item}</Text>
            <Button title="Edit" onPress={() => HandlerModal(item)} />
        </View>
    )

    const renderItemComplete = ({ item }) => (
        <View style={styles.renderItemContainer}>
            <Text>{item}</Text>
            <Button title="Edit" onPress={() => HandlerModalComplete(item)} />
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.container}>
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
                <Modal
                    isVisible={modalVisible}
                    itemSelected={itemSelected}
                    actionCompleteItem={() => onHandlerComplete(itemSelected)}
                    actionDeleteItem={() => onHandlerDelete(itemSelected)}
                    onDismissModal={setModalVisible}
                />

                {/* Complete tasks */}
                <View style={styles.listContainer}>
                    <Text style={styles.subtitle}>Complete Tasks</Text>
                    <FlatList
                        data={completeList}
                        renderItem={renderItemComplete}
                        keyExtractor={item => item}
                        style={styles.listItem}
                    />
                </View>
                <ModalComplete
                    isVisible={modalCompleteVisible}
                    itemSelected={itemCompleteSelected}
                    actionDeleteItem={() => onHandlerDeleteComplete(itemCompleteSelected)}
                    onDismissModal={setModalCompleteVisible}
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
    subtitle: {
        marginBottom: 10,
        fontSize: 15,
        fontWeight: "300",
        color: "#3b8ff6",
        alignSelf: "center"
    },
    listContainer: {
        flex: 2,
        marginHorizontal: 30,
        marginTop: 40,
        padding: 3,
    },
    renderItemContainer: {
        flexDirection: "row",
        marginBottom: 30,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        justifyContent: "space-between",
    },
})

export default ViewTasks;