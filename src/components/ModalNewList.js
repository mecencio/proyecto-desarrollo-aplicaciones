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

const ModalNewList = ({
    isVisible,
    actionComplete,
    onDismissModal,
}) => {
    const [list, setList] = useState('');

    const onHandlerChangeItem = (list) => {
        setList(list)
    }

    return (
        <NewModal animationType="slide" visible={isVisible} style={styles.modalContainer} center>
            <DialogHeader title="New List" />
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
                    onPress={() => actionComplete(list)}
                />
            </DialogActions>
        </NewModal>
    )
}

export default ModalNewList;

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