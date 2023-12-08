import {RestaurantCard,withPromotedLabel} from "./RestaurantCard"
import { restData } from "../utils/mockData"
import { useState,useEffect } from "react";
import { liveAPI } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const BodyComp=()=>{
    //const [lstOfTopRest,setlstOfTopRest]=useState(restData);
    const [lstOfRest,setlstOfRest]=useState(restData);
    const [lstOfFiltered,setlstOfFiltered]=useState(restData);
    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
    useEffect(()=>{
       fetchData();
    },[]);

    const [searchText,setSearchText]=useState("");
    const fetchData= async ()=>{
        const data=await fetch(liveAPI);
        const json=await data.json();
        //console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setlstOfFiltered(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setlstOfRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const  onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return(
            <div>
                <h3>Uh, ah!! Looks like there's no internet connection. Please retry after sometime.</h3>
            </div>
        )
    }
    return(
    <div className="bg-slate-100">
       <input type="text" className=" mx-2 border-solid border-2 border-slate-200 outline-none rounded-md" value={searchText}
       onChange={(e)=>{
        setSearchText(e.target.value);
       }}
       />
       <button className="m-2 text-slate-50 p-1 rounded-md bg-slate-500/75 hover:bg-slate-600" 
        onClick={()=>{
            const tmpList=lstOfRest.filter((restRec)=>{
                return restRec.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setlstOfFiltered(tmpList);
        }
           
        }
        >Search</button>
        <button className="m-2 text-slate-50 p-1 rounded-md bg-slate-500/75 hover:bg-slate-600" 
        onClick={()=>{
            const tmpList=lstOfRest.filter((restRec)=>{
                return restRec.info.avgRating>=4;
            })
            setlstOfFiltered(tmpList);
        }
           
        }
        >List of Top Rated Restaurants</button>
        <div className="flex flex-wrap gap-6 mx-2 mb-2">
        { lstOfFiltered.map((resObj)=>{
                return resObj.info.promoted?<RestaurantCardPromoted key={resObj.info.id} restDataRec= {resObj?.info}/>:<RestaurantCard key={resObj.info.id} restDataRec= {resObj?.info}/>
                //return <RestaurantCard key={resObj.info.id} restDataRec= {resObj}/>
            })
        }  
        </div>  
    </div>
    )
}
export default BodyComp