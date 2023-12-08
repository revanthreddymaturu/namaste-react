
import {webLink} from "../utils/constants"
import { addCartItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenuItems=(props)=>{
    const dispatch=useDispatch();

    const {eachMenuItem}=props;
    const addHandler=(item)=>{
        dispatch(addCartItem(item));
    }
    return(
        <div className="flex justify-between  items-center p-4 w-6/12 m-auto border-b-2 border-gray-200 rounded-sm" key={eachMenuItem?.card?.info?.id}>
            <div className=" p-1">
                <div className="w-[180px] font-thin">{eachMenuItem?.card?.info?.name}</div>
                <div className="font-thin">{"₹"+eachMenuItem?.card?.info?.price/100}</div>
            </div>
            <div>
                <button onClick={()=>addHandler(eachMenuItem)} className="cursor-pointer px-3 absolute bg-black text-white mx-10 mt-[100px] p-1 rounded-lg">Add﹢</button>
                <img className=" text-right rounded-md w-[150px] h-32" src={webLink+eachMenuItem?.card?.info?.imageId}></img>
            </div>

        </div>
    )

}

export default RestaurantMenuItems