import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItems=()=>{
    const cartItems=useSelector((store)=>store.cart.cartItems);
    return(
    
    <div>
         {cartItems.map((eachMenuItem)=>{
           return <CartItem eachItem={eachMenuItem}/>
       })}
       
    </div>
    )
    
}
export default CartItems
