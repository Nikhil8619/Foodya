import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCaterogy";
import { useState } from "react";


const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo=useRestaurantMenu(resId);

  const[showIndex,setShowIndex]=useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   try {
  //     const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //     const targetUrl = MENU_URL + resId;
  //     const data = await fetch(proxyUrl + targetUrl);
  //     const json = await data.json();
  //     console.log(json);

  //     setResInfo(json.data);
  //   } catch (error) {
  //     console.error("Failed to fetch menu", error);
  //   }
  // };

  const itemCards = resInfo?.cards
    ?.find(c => c?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.find(card => card?.card?.card?.itemCards)?.card?.card?.itemCards;

  if (!itemCards) return <h2>Loading menu items...</h2>;

  const restaurantInfo = resInfo?.cards?.find(card => card?.card?.card?.info)?.card?.card?.info;



  console.log(
    resInfo?.cards?.find(c => c?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories=resInfo?.cards?.find(c => c?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
      c?.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  
 



  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{restaurantInfo?.name}</h1>
      <p className="font-bold text-lg">
        {restaurantInfo?.cuisines?.join(", ")} - {restaurantInfo?.costForTwoMessage}
      </p>
      {categories.map((category,index) =>(
        <RestaurantCategory 
        key={category?.card?.card?.categoryId} 
        data={category?.card?.card}
        showItems={index===showIndex ? true : false}
        setShowIndex={()=> setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

{/* <h2>Menu</h2>
      <ul>
        {itemCards.map(item => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
