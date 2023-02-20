export const NEW_LIST = "NEW_LIST";
export const DELETE_LIST = "DELETE_LIST";

export const newList = (title) => ({
    type: NEW_LIST,
    listTitle: title,
});

export const deleteList = (title) => ({
    type: DELETE_LIST,
    listTitle: title,
});
