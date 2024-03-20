import { useContext } from "react";
import CDN_URL from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestrauntCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200"
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="error"
        className="rounded-lg"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>User:{loggedInUser}</h4>
    </div>
  );
};
// Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  // Here, the first return is returning us the enhanced cersion of Restraunt Card so that's why we are passing the props in this as it is returning the enhanced RestrauntCard function.
  // And the second return is returning us the JSX.
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
// In React, the spread operator ({...props}) is used to pass all the properties of the props object to the component it is applied to.
// In the provided code, the withPromotedLabel function is a higher-order component (HOC) that takes a component (RestaurantCard) and returns a new component. This new component renders the original RestaurantCard component along with an additional label, "Promoted."
// By using {...props}, the new component (RestaurantCard with the label) receives and passes down all the properties that were initially passed to it. This ensures that any additional properties or changes made to the RestaurantCard component are still applied when using the HOC. It helps maintain flexibility and avoids manual listing of each property when composing components.
