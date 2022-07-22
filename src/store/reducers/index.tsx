import { CHANGE_CANVAS, } from "../acitons";
import { combineReducers } from "redux";
function canvas(state = { canvas: null }, action: any): object {
    switch (action.type) {
        case CHANGE_CANVAS:
                return { ...state, canvas: action.data};
        default:
            return state
    }
}
const lastReducer = combineReducers({
    canvas: canvas
})
export default lastReducer;