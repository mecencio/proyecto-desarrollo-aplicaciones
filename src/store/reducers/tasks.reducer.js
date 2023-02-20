import { TASKLISTS } from "../../data/Tasklists";
import { COMPLETE_TASK, DELETE_COMPLETED_TASK, DELETE_TASK, NEW_TASK } from "../actions/task.action";

const initialState = TASKLISTS;

const TasksReducer = (state = initialState, action) => {
    let auxState = state;
    let listTitle = action.listTitle

    switch (action.type) {
        case NEW_TASK:
            //La lista debe existir
            //Los pendientes de la lista no deben contener una tarea con el mismo nombre
            //Las tareas completadasno deben contener una tarea con el mismo nombre
            if (
                auxState.find(item => item.title == listTitle) && 
                !auxState.find(item => item.title == listTitle).pending.includes(action.taskName) && 
                !auxState.find(item => item.title == listTitle).completed.includes(action.taskName)
            ) {
                auxState.find(item => item.title == listTitle).pending.push(action.taskName)
                return [...auxState];
            }

        case COMPLETE_TASK:
            //La lista debe existir
            //Las tareas completadasno deben contener una tarea con el mismo nombre
            if ( 
                auxState.find(item => item.title == listTitle) && 
                !auxState.find(item => item.title == listTitle).completed.includes(action.taskName)
            ) {
                const index = auxState.find(item => item.title == listTitle).pending.findIndex(item => item == action.taskName);
                if (index >= 0) {
                    auxState.find(item => item.title == listTitle).pending.splice(index, 1);
                }
                auxState.find(item => item.title == listTitle).completed.push(action.taskName);
                return [...auxState];
            }

        case DELETE_TASK:
            // La lista debe existir
            if (auxState.find(item => item.title == listTitle)) {
                const index = auxState.find(item => item.title == listTitle).pending.findIndex(item => item === action.taskName)
                if (index >= 0) {
                    auxState.find(item => item.title == listTitle).pending.splice(index, 1);
                }
                return [...auxState];
            }

        case DELETE_COMPLETED_TASK:
            // La lista debe existir
            if (auxState.find(item => item.title == listTitle)) {
                const index = auxState.find(item => item.title == listTitle).completed.findIndex(item => item === action.taskName)
                if (index >= 0) {
                    auxState.find(item => item.title == listTitle).completed.splice(index, 1);
                    return [...auxState];
                }
            }

        default:
            return state
    }
}

export default TasksReducer;