import { liveMenu } from "./constants";
import { useEffect, useState } from "react";


const useRestaurantRec=(resId)=>{
    const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(liveMenu + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
}
export default useRestaurantRec