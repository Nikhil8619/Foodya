import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;

  return (
    <div
      data-testid="resCard"
      className="m-3 p-3 w-[280px] h-[460px] flex flex-col rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      style={{ backgroundColor: "#f0f4f8" }}
    >
      <div className="w-full h-44 overflow-hidden rounded">
        <img
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between mt-2">
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-gray-800 truncate">{name}</h3>
          <h4
            className="text-xs text-gray-500 overflow-hidden text-ellipsis"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {cuisines.join(", ")}
          </h4>
        </div>

        <div className="">
          <h4 className="text-xs text-green-600 font-medium">{avgRating} ★ rating</h4>
          <h4 className="text-xs text-gray-700">{costForTwo}</h4>
          <h4 className="text-xs text-blue-600">{sla.deliveryTime} mins</h4>
        </div>

        <h4 className="text-[10px] text-gray-400 font-bold ">User: {loggedInUser}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
