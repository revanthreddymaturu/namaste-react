import { useState } from "react";
import RestaurantMenuItems from "./RestaurantMenuItems";

const RestaurantMenu=(props)=>{
   // const [accToggle,setAccToggle]=useState(false);
    const {categoryName, menuItems, showItems,setShowIndex,setToggle}=props;
    //console.log("menununun"+menuItems)

    return(
        <div>
    <div className="shadow-lg rounded-md flex p-4 w-6/12 m-auto cursor-pointer justify-between" onClick={()=>{
        setShowIndex();
        
    }}>
        <h3 className="font-medium text-lg text-gray-600">{categoryName+" "+"("+menuItems.length+")"} </h3>
        <div>⬇️</div>
    </div>
    <div>
   {menuItems.map((eachItem)=>{
            return showItems && <RestaurantMenuItems key={eachItem?.card?.info?.name} eachMenuItem={eachItem}/>
        })}
    </div>
    </div>
    )
}
export default RestaurantMenu