import { clearCart } from "../utils/cartSlice";
import CartItems from "./CartItems"
import { useDispatch } from "react-redux"
const Cart=()=>{
    const dispatch=useDispatch();
    const clearHandler=()=>{
        dispatch(clearCart());
    }
    return(
        <div>
             <div className="text-center text-[25px]">Cart</div>
             <div className="text-center">
             <button onClick={()=>clearHandler()} className="cursor-pointer px-3 bg-black text-white  p-1 rounded-lg text-center">Clear Cart</button>
             </div>
            <CartItems/>
        </div>
       
    )
}
export default Cart