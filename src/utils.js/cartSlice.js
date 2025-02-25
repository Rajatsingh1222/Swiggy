import {createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
         
        addItems:(state,action)=>{
            console.log(action.payload.card.info);
            
            const inCart= state.items.findIndex((item) => item.card.info.id === action.payload.card.info.id);
            // console.log(item.card.info);
            if (inCart==-1) {
            //   item.qty += payload.qty;
            state.items.push({...action.payload,quan:1});
        } 
        else {
            // console.log(inCart);
            state.items[inCart].quan++;
            // console.log(state)
        }
        // state.items.length++;
            
            
        },
        removeItems:(state,action)=>{


            const inCart= state.items.findIndex((item) => item.card.info.id === action.payload.card.info.id);
            if(state.items[inCart].quan>1){
            
                state.items[inCart].quan--;
            }
            else {
                state.items.splice(inCart,1);
            }


        },
        clearCart:(state)=>{
            state.items.length=0;
        },

    },
});
export const {addItems,removeItems,clearCart}=cartSlice.actions;
export default cartSlice.reducer;