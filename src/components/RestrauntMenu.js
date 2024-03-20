import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestrauntCategory from "./RestrauntCategory";
const RestrauntMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  // {resId} is the dynamic part here when routing bcoz each restraunt have there own unique id.
  const resInfo = useRestaurantMenu(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   console.log(json.data);
  //   setResInfo(json.data);
  // };
  const dummy = "Dummy Data";
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(" ,")} - {costForTwoMessage}
      </p>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
      {/* categories accordions */}
      {/* // controlled component */}
      {categories.map((category, idx) => (
        <RestrauntCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={idx === showIndex ? true : false}
          setShowIndex={() => setShowIndex(idx)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};
export default RestrauntMenu;
// Some Restraunt cards when we will click we will get error bcoz there structure of nested data is diffrent from the way we have destructure the data above in  {itemscards}
