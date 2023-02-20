export const NEW_TASK = "NEW_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const DELETE_COMPLETED_TASK = "DELETE_COMPLETED_TASK";


export const newTask = (title, task) => ({
    type: NEW_TASK,
    listTitle: title,
    taskName: task,
});

export const completeTask = (title, task) => ({
    type: COMPLETE_TASK,
    listTitle: title,
    taskName: task,
});

export const deleteTask = (title, task) => ({
    type: DELETE_TASK,
    listTitle: title,
    taskName: task,
});

export const deleteCompletedTask = (title, task) => ({
    type: DELETE_COMPLETED_TASK,
    listTitle: title,
    taskName: task,
})