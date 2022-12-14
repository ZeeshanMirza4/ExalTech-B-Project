export const ReducerNav= (state=[], action)=> {
    if(action.type==="ADD_LINK"){
        return[...state, action.payload]
    }else
    return state;
}