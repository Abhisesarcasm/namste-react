import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestrauntMenu from "../RestrauntMenu.js";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestrauntMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Andhra Bowls (13)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(13);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(15);
  // 15 boz 13 items from Andhra Bowls (13) & As I have added 2 items in cart so that's why 13 + 2 = 15

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(13);
  // 13 bcoz as I cleared 2 item from cart so there is nothing in cart(empty) so 15 - 2 = 13

  expect(
    screen.getByText("Cart items is empty. Add items to the cart!!!")
  ).toBeInTheDocument();
});
// NOTE :-
// Here, in this testing we have put several test cases inside a single test statement which is not a good thing it will work though. But, we should have the practice to make separate test statements logic for each test case.
