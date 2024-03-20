import React, { useEffect, useState, useContext } from "react";
import resList from "../utils/mockData";
import RestrauntCard, { withPromotedLabel } from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listofRestraunts, setListofRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestrauntCardPromoted = withPromotedLabel(RestrauntCard);
  console.log("Body Rendered", filteredRestraunts);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // const data = await fetch(
    //   "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.4668716&lng=83.9811665&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    //   {
    //     headers: {
    //       "x-cors-api-key": "temp_2a8c33567988e819de369a7c4243ddf7",
    //     },
    //   }
    // );
    const json = await data.json();
    console.log(json);
    console.log(json.data.cards);
    // "Without Optional Chaining",
    // setListofRestraunts(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
    // "With Optional Chaining",
    setListofRestraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // The data format as it is live data can change anytime in future so we should know how to read data from the live API data.
    setFilteredRestraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );
  }
  // Conditional Rendering
  // if (listofRestraunts.length === 0) {
  //   // return <h1>Loading....</h1>;
  //   return <Shimmer />;
  // }
  const { loggedInUser, setUserName } = useContext(UserContext);
  return (
    <>
      {listofRestraunts.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="filter flex">
            <div className="search p-4 m-4">
              <input
                type="text"
                data-testid="searchInput"
                className="border border-solid border-black"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={() => {
                  console.log(searchText);
                  const filteredRestraunt = listofRestraunts.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredRestraunts(filteredRestraunt);
                }}
              >
                Search
              </button>
            </div>
            <div className="search p-4 m-4 flex items-center">
              <button
                className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
                onClick={() => {
                  const filteredList = listofRestraunts.filter(
                    (res) => res.info.avgRating > 4.3
                  );
                  setFilteredRestraunts(filteredList);
                }}
                style={{ marginTop: "12px", padding: "6px" }}
              >
                Top Rated Restraunts
              </button>
            </div>
            <div className="search m-4 p-4 flex items-center">
              <label className="mx-2">UserName : </label>
              {/* When input changes the context also gets updated. */}
              <input
                className="border border-black p-2"
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* {filteredRestraunts.map((restraunt) => (
              <Link
                to={"/restraunts/" + restraunt.info.id}
                key={restraunt.info.id}
              >
                <RestrauntCard resData={restraunt} />
                If a restraunt is promoted then add a promoted label to it.
                {restraunt.info.promoted ? (
                  <RestrauntCardPromoted resData={restraunt} />
                ) : (
                  <RestrauntCard resData={restraunt} />
                )}
              </Link>
            ))} */}
            {filteredRestraunts.map((restraunt) => (
              <Link
                to={"/restraunts/" + restraunt.info.id}
                key={restraunt.info.id}
              >
                {/* Use RestrauntCardPromoted instead of RestrauntCard */}
                {restraunt.info.avgRating > 4.2 ? (
                  <RestrauntCardPromoted resData={restraunt?.info} />
                ) : (
                  <RestrauntCard resData={restraunt?.info} />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Body;
