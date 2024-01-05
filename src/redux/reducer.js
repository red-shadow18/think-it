import { SWITCH_THEME } from "./action"


export const reducer=(state, action)=>{
    if (action.type ===SWITCH_THEME){
        return {...state, darkTheme:!state.darkTheme}
    }
    return state
}