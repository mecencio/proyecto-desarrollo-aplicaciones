import { createStore, combineReducers } from "redux";
import ListsReducer from "./reducers/lists.reducer";
import TasksReducer from "./reducers/tasks.reducer";

const RootReducer = combineReducers({
    list: ListsReducer,
    task: TasksReducer,
})

export default createStore(RootReducer);