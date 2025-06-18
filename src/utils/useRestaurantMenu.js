import { useEffect,useState } from "react"
import { MENU_URL } from "./constant";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const targetUrl = MENU_URL + resId;
      const data = await fetch(proxyUrl + targetUrl);
      const json = await data.json();
      console.log(json);

      setResInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch menu", error);
    }
  };
  return resInfo
}

export default useRestaurantMenu