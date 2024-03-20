import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  //const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - (0 items)");

  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   we can use regex also for testing
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  //   for firing an event when we click the login button
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  //   So, after clicking the login button we have logout button with us and now we have to test that logout button is present or not
  expect(logoutButton).toBeInTheDocument();
});

// Here we were getting error at first bcoz the Header Component uses redux {useSelector} inside it and the when we test our component it will not understand that's why to resolve it we used { Provider } while rendering our component in testing.

// After, this also we got an error when did npm run test bcoz in our <Header/> component we have <Link> tag which is not JSX & also it is not HTML.It actually comes from "react-router-dom" library. So, to resolve this we have to provide routing in our testing so for that we have used { BrowserRouter }.
