import React,{useContext} from "react";
import { Productcontext } from "./Cart";

const Items = ({id,title,description,price,img,quantity}) => {
  
    const {removeItem,increament,decreament} = useContext(Productcontext)

  return (
    <div>
      <div className="items-info">
        <div className="product-img">
          <img
            src={img}
            alt="image"
          />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus " onClick={()=>decreament(id)} />
          <input type="text" value={quantity}  />
          <i className="fas fa-plus add" onClick={()=>increament(id)} />
        </div>
        <div className="price">
          <h3>{price*quantity}</h3>
        </div>
        <div className="remove-item">
          <i className="fas fa-trash-alt remove"  onClick={()=>removeItem(id)}  />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Items;
