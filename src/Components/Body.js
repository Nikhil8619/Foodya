import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRest] = useState(resList);  // Keep original data intact
  const [filterRest, setFilterRest] = useState(resList);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="text-center text-xl font-semibold mt-8">
        🚫 You are offline. Please check your internet connection.
      </h1>
    );

  // Filter top-rated restaurants (rating > 4.7)
  const handleTopRated = () => {
    const topRated = listOfRest.filter(
      (res) => Number(res.info.avgRating) > 4.7
    );
    setFilterRest(topRated);
  };

  // Search restaurants
  const handleSearch = () => {
    const filtered = listOfRest.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRest(filtered);
  };

  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className="min-h-screen p-4"
      style={{ backgroundColor: "#eaf4fc" }}  // ✅ attractive soft blue background
    >
      {/* Search + Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex gap-2">
          <input
            className="px-3 py-2 border rounded w-64"
            data-testid="searchInput"
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
          onClick={handleTopRated}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filterRest.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No restaurants found.
          </div>
        ) : (
          filterRest.map((restaurant) => (
            <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
