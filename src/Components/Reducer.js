import React from 'react'

const Reducer = (state,action) => {
    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            items: state.items.filter((curItem)=>{
                return curItem.id !== action.payload    
            })
        }   
    }
    if(action.type === "CLEAR_ITEMS"){
        return{
            ...state,
            items:[]
        }
    }
    if(action.type === "INCREAMENT"){
        let updateddata=state.items.map((curItem)=>{
            if(curItem.id === action.payload){
                return{
                    ...curItem,
                    quantity:curItem.quantity+1
                }
            }
            return{             // return curItem
                ...curItem
            }
        })
        return{
            ...state,
            items:updateddata
        }
    }
    if(action.type === "DECREAMENT"){
        let updateddata=state.items.map((curItem)=>{
            if(curItem.id === action.payload){
                return{
                    ...curItem,
                    quantity:curItem.quantity-1
                }
            }
            return{
                ...curItem
            }
        }).filter((curItem)=>{
            return(
                curItem.quantity !== 0
            )
        })
        return{
            ...state,
            items:updateddata
        }
    }
    if(action.type === "GET_TOTAL"){
        let {totalItem,totalAmount}=state.items.reduce((accum,curVal)=>{
            let {quantity,price} = curVal;
            let updateAmount=quantity * price
            accum.totalAmount += updateAmount;
            accum.totalItem += quantity;
            return accum;
        },
        {
            totalItem:0,
            totalAmount:0
        }
        );
        return{
            ...state,
            totalItem,
            totalAmount
        }
    }
  return state
}

export default Reducer