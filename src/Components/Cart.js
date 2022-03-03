import React,{useState , createContext , useReducer , useEffect} from 'react'
// import './Cart.css'
// import { Scrollbars } from 'react-custom-scrollbars';
// import Items from './Items';
import { products } from './Products';
import CartContext from './CartContext';
import Reducer from './Reducer';

export const Productcontext = createContext()

const initialState={
  items:products,
  totalItem:0,
  totalAmount:0,
}

const Cart = () => {
  //const [items, setitems] = useState(products)

  const [state, dispatch] = useReducer(Reducer,initialState)

  const removeItem=(id)=>{
    return dispatch({
      type:"REMOVE_ITEM",
      payload:id
    })
  }

  const clearCart=()=>{
    return dispatch({
      type:"CLEAR_ITEMS"
    })
  }

  const increament=(id)=>{
    return dispatch({
      type:"INCREAMENT",
      payload:id
    })
  }

  const decreament=(id)=>{
    return dispatch({
      type:"DECREAMENT",
      payload:id
    })
  }

  useEffect(() => {
   dispatch({
     type:"GET_TOTAL"
   })
  // console.log("hello");
  }, [state.items])
  

  return (
   <div>
   <Productcontext.Provider value={{...state,removeItem,clearCart,increament,decreament}} >
   <CartContext/>
   </Productcontext.Provider>
   </div>
  )
}

export default Cart