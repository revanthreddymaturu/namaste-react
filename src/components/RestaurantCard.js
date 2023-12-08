import {webLink} from "../utils/constants"
import { Link } from "react-router-dom";
export const RestaurantCard=(props)=>{
    const {restDataRec}=props;
    
    const {name,avgRating,cloudinaryImageId,cuisines,sla,id}=restDataRec;
    return(
        <div className="bg-zinc-300 p-4 rounded-md w-[250px] flex border-solid border-2 border-slate-300">
            <Link className="" to={"/restaurant/"+id}>
            <div><img className="rounded-md w-[250px] h-32" src={webLink+cloudinaryImageId}></img></div>
            <div className="p-1">
                <h3 className="font-bold">{name}</h3>
                <h3>{cuisines.join(', ')}</h3>
                <h4>{avgRating} Stars</h4>
                <h4>{sla.slaString}</h4>
            </div>
            </Link>
        </div>
    )
}
export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-3 p-1 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}