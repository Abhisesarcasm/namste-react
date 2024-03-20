import { render, screen } from "@testing-library/react";
import RestrauntCard, { withPromotedLabel } from "../RestrauntCard.js";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestrauntCard resData={MOCK_DATA} />);

  const name = screen.getByText("Wow! Momo");

  expect(name).toBeInTheDocument();
});
const PromotedRestaurantCard = withPromotedLabel(RestrauntCard);
it("should render RestaurantCard component with Promoted Label", () => {
  render(<PromotedRestaurantCard resData={MOCK_DATA} />);

  const promotedLabel = screen.getByText("Promoted");

  expect(promotedLabel).toBeInTheDocument();
});
