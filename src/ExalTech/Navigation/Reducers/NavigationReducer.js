export const NavigationReducer =(
    state =[
        {name: "Mr_Zee",
    link: "https://www.google.com", target: "blank"},
    ], action) => { 

    if(action.type==="ADD_LINK"){
        return[...state, action.data]
    }else
    return state;
}