import { useParams } from "react-router-dom"
import ShimmerComp from "./shimmer";
import useRestaurantRec from "../utils/useRestaurantRec";
import { useState } from "react";
import RestaurantMenu from "./RestaurantMenu";
const RestaurantInfo=()=>{
    const {resId}=useParams();
    const restDataRec=useRestaurantRec(resId);
    const [showIndex,setShowIndex]=useState(0);
    if(restDataRec==null) return(
        <ShimmerComp/> 
    )
    const { name, cuisines, costForTwoMessage } =restDataRec?.cards[0]?.card?.card?.info;
   // const {costForTwoMessage}=restDataRec?.data?.cards[0]?.card?.card?.info?.slugs;
   const filteredList=restDataRec?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((eachRec)=>
        eachRec?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   );
   console.log(filteredList)
    return(
        <div className="m-2 rounded-md w-full">
            <div className="p-1 text-center">
                <h3 className="text-xl font-bold text-gray-600">{name}</h3>
                <h3>{cuisines.join(', ')}</h3>
                <h4>{costForTwoMessage}</h4>
            </div>
            {filteredList.map((eachCard,index)=>{
                return <RestaurantMenu key={eachCard?.card?.card?.title}  showItems={(index===showIndex)?true:false} setShowIndex={()=>setShowIndex(index)} categoryName={eachCard?.card?.card?.title} menuItems={eachCard?.card?.card?.itemCards} />
            })}
            
        </div>
    )
}
export default RestaurantInfo