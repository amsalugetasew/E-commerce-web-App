import React from 'react'
const AddItem = [];
 const addItem = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM": return[
            ...state,
            action.payload
        ]
        break;
        case "DELITEM": 
        return state = state.filter((x)=>{
            return x.id !== action.payload.id
        })        
        break;
            
        default:
            return state;
            break;
    }
}
export default AddItem;
