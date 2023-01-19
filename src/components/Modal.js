import React from "react"
import { View, StyleSheet, Text, Button, Modal as NewModal } from "react-native"

const Modal = ({
    isVisible,
    actionCompleteItem,
    actionDeleteItem,
    itemSelected,
    onDismissModal,
}) => {
    return (
        <NewModal animationType="fade" transparent={true} visible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalStyle}>
                    <Text style={styles.modalTextStyle}>{itemSelected}</Text>
                    <Button title="Complete" onPress={() => actionCompleteItem()} />
                    <Button title="Delete" onPress={() => actionDeleteItem()} />
                    <Button title="close" onPress={() => onDismissModal(false)} />
                </View>
            </View>
        </NewModal>
    )
}

export default Modal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
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