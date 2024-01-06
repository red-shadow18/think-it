import { SWITCH_MODE, SWITCH_THEME } from "./action"


export const reducer=(state, action)=>{
    const {type}= action
    if (type ===SWITCH_THEME){
        return {...state, darkTheme:!state.darkTheme}
    }else if(type===SWITCH_MODE){
        return {...state, expertMode:!state.expertMode}
    }
    return state
}