export const ecommerceReducer =(state ={allProducts: [],cart: [], selectedItem:{}}
    ,action)=>{
        if(action.type === "ALL_PRODUCTS"){
            return{...state, allProducts: action.data};
        }
        if(action.type === "")
    return 
};