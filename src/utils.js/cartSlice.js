import {createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
         
        addItems:(state,action)=>{
            // console.log(action.payload.card.info);
            // console.log("oni");
            
            const inCart= state.items.findIndex((item) => item.card.info.id === action.payload.card.info.id);
            if (inCart==-1) {
            //   item.qty += payload.qty;
            state.items.push({...action.payload,quan:1});
        } 
        else {
            // console.log(inCart);
            state.items[inCart].quan++;
            // console.log(state.items[inCart])
        }
        // state.items.length++;
            
            
        },
        removeItems:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        },

    },
});
export const {addItems,removeItems,clearCart}=cartSlice.actions;
export default cartSlice.reducer;