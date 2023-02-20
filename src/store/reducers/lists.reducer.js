import { TASKLISTS } from "../../data/Tasklists";
import { NEW_LIST, DELETE_LIST } from "../actions/lists.action";

const initialState = TASKLISTS;

const ListsReducer = (state = initialState, action) => {
    let auxState = state;

    switch (action.type) {
        case NEW_LIST:
            if (!state.find(item => item.title == action.listTitle)) {
                return [...state, {title: action.listTitle, pending: [], completed: []}]
            } else {
                return state;
            };

        case DELETE_LIST:
            const title = action.listTitle;
            // La lista debe existir
            // La lista debe ser distinta a general
            if (title != "General" && auxState.find(item => item.title == title)) {
                const index = auxState.findIndex(item => item.title == title)
                if (index >= 0) {
                    auxState.splice(index, 1);
                    return [...auxState];
                }
            }

        default:
            return state;
    }
}

export default ListsReducer;