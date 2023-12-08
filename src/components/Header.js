import { useState } from "react";
import { logoLink } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const HeaderComp=()=>{
    const [logButton,setlogButton]=useState("Login");
    const  onlineStatus=useOnlineStatus();
    const cartItems=useSelector((store)=>store.cart.cartItems)
    return(
    <div className="flex justify-between items-center  border-4 border-none bg-gray-50">
        <div className="w-48"><img src={logoLink}></img></div>
            <ul className="flex gap-10 m-8">
                <li>Status: {onlineStatus?"🟢":"🔴"}</li>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About Us</li></Link>
                <Link to="/contact"><li>Contact Us</li></Link>
                <Link to="/grocery"><li>Grocery</li></Link>
                <Link to="/cart"><li>🛒-{cartItems.length+" items"}</li></Link>
                <button className="text-slate-50 p-1 rounded-md bg-sky-500/75 hover:bg-cyan-600 "
                onClick={(()=>{
                    logButton==="Login"?setlogButton("Logout"):setlogButton("Login")
                    
                })}
                >{logButton}</button>
            </ul>
    </div>
    )
}

export default HeaderComp;