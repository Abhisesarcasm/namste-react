import { useState } from "react";
import ItemsList from "./ItemsList";
const RestrauntCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
    // setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemsList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};
export default RestrauntCategory;


// The behavior you're describing, where expanding one accordion causes the collapse of others, is achieved through the use of the showIndex state in the RestrauntMenu component. Let's break down the sequence of events when you expand accordion 2:

// Initial State:

// Initially, no accordion is expanded (showIndex is null).
// Clicking Accordion 1:

// When you click on accordion 1, the setShowIndex function is called with the index of accordion 1 (setShowIndex(1) or some specific index).
// This sets the showIndex state to the index of accordion 1, and accordion 1 is expanded.
// Clicking Accordion 2:

// Now, when you click on accordion 2, the setShowIndex function is called with the index of accordion 2 (setShowIndex(2) or some specific index).
// This sets the showIndex state to the index of accordion 2.
// Since showItems={idx === showIndex ? true : false}, accordion 2's showItems prop evaluates to true because 2 === 2 (assuming accordion 2's index matches the current showIndex state).
// Accordion 2 is expanded.
// Effect on Accordion 1:

// When the showIndex state is updated to the index of accordion 2, the condition idx === showIndex for accordion 1 becomes 1 === 2, which is false.
// As a result, accordion 1's showItems prop evaluates to false.
// Accordion 1 is collapsed because its showItems prop is false.
// This mechanism ensures that only one accordion is expanded at a time. When you expand a new accordion, the showIndex state is updated, causing the previously expanded accordion to collapse (since its showItems prop becomes false). This behavior is controlled by the state management in the RestrauntMenu component.