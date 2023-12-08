import { webLink } from "../utils/constants";
const CartItem=(props)=>{
    const {eachItem}=props;
    return(
        <div className="flex justify-between  items-center p-4 w-6/12 m-auto border-b-2 border-gray-200 rounded-sm" key={eachItem?.card?.info?.id}>
            <div className=" p-1">
                <div className="w-[180px] font-thin">{eachItem?.card?.info?.name}</div>
                <div className="font-thin">{"₹"+eachItem?.card?.info?.price/100}</div>
            </div>
            <div>
                <img className=" text-right rounded-md w-[150px] h-32" src={webLink+eachItem?.card?.info?.imageId}></img>
            </div>

        </div>
    )
}
export default CartItem