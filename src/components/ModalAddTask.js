import React, { useState } from "react"
import { StyleSheet, Modal as NewModal } from "react-native"
import {
    Stack,
    Button,
    DialogHeader,
    DialogContent,
    DialogActions,
    TextInput,
} from "@react-native-material/core";

const ModalAddTask = ({
    isVisible,
    actionComplete,
    onDismissModal,
}) => {
    const [task, setTask] = useState('');

    const onHandlerChangeItem = (task) => {
        setTask(task)
    }

    return (
        <NewModal animationType="slide" visible={isVisible} style={styles.modalContainer} center>
            <DialogHeader title="Add new task" />
            <DialogContent>
                <Stack spacing={2}>
                    <TextInput label="Title" variant="standard" onChangeText={onHandlerChangeItem}/>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button
                    title="Cancel"
                    compact
                    variant="text"
                    onPress={() => onDismissModal(false)}
                />
                <Button
                    title="Ok"
                    compact
                    variant="text"
                    onPress={() => actionComplete(task)}
                />
            </DialogActions>
        </NewModal>
    )
}

export default ModalAddTask;

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalStyle: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        maxHeight: 300,
        width: 150,
        margin: 20,
        borderColor: "black",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTextStyle: {
        fontSize: 30,
    },
})