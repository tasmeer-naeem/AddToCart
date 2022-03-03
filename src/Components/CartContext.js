import React from 'react'
import {useState , useContext} from 'react'
import './Cart.css'
import { Scrollbars } from 'react-custom-scrollbars';
import Items from './Items';
//import { products } from './Products';
import { Productcontext } from './Cart';

const CartContext = () => {
    //const [items, setitems] = useState(products)
    const {items,clearCart,totalItem,totalAmount} = useContext(Productcontext)
  
 if(items.length === 0){
   return(
     <div>
     <header>
     <div className='continue-shopping'>
     <img src='./images/arrow.png' alt='arrow' className='arrow-icon'/>
     <h3>Continue Shopping</h3>
     </div>
 
     <div className='cart-icon'>
     <img src='./images/cart.png' alt='cart'/>
     <p>{totalItem}</p>
     </div>
     </header>
 
     <section className='main-cart-section'>
     <h1>Shopping Cart</h1>
     <p className='total-items'>You have <span className='total-items-count'>{totalItem}</span> items in shopping cart</p>
 
     <div className='cart-items'>
         <div className='cart-items-container'>
         <Scrollbars>  
         {
           items.map((curItem)=>{
             return(
             <Items key={curItem.id} {...curItem} />
             )
           })
         } 
         </Scrollbars>
         </div>
     </div>
 
     <div className='card-total'>
       <h3>Cart Total : <span>7000rs</span></h3>
       <button>Checkout</button>
       <button className="clear-cart" onClick={clearCart} >Clear Cart</button>
     </div>
     </section>
     </div>
   )
 }

  return (
    <div>
    <div>
    <header>
    <div className='continue-shopping'>
    <img src='./images/arrow.png' alt='arrow' className='arrow-icon'/>
    <h3>Continue Shopping</h3>
    </div>

    <div className='cart-icon'>
    <img src='./images/cart.png' alt='cart'/>
    <p>{totalItem}</p>
    </div>
    </header>

    <section className='main-cart-section'>
    <h1>Shopping Cart</h1>
    <p className='total-items'>You have <span className='total-items-count'>{totalItem}</span> items in shopping cart</p>

    <div className='cart-items'>
        <div className='cart-items-container'>
        <Scrollbars>  
        {
          items.map((curItem)=>{
            return(
            <Items key={curItem.id} {...curItem} />
            )
          })
        } 
        </Scrollbars>
        </div>
    </div>

    <div className='card-total'>
      <h3>Cart Total : <span>{totalAmount}rs</span></h3>
      <button>Checkout</button>
      <button className="clear-cart" onClick={clearCart} >Clear Cart</button>
    </div>
    </section>
    
    </div>
    </div>
  )
}

export default CartContext