import Contact from "../Contact.js";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// test & it are same
// we can run test cases without wrapping our test cases inside describe
describe("Contact us page Test Case", () => {
  // These below all comes from react-testing library
  // before all test cases beforeAll will get executed
  // before each test case beforeEach will get executed
  // after all test cases afterAll will get executed
  // after each test cases afterEach will get executed
  // beforeAll(() => {
  //   console.log("Before All");
  // });
  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  // afterAll(() => {
  //   console.log("After All");
  // });
  // afterEach(() => {
  //   console.log("After Each");
  // });

  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //   Assertion
    expect(heading).toBeInTheDocument();
  });
  test("Should load button inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //   Assertion
    expect(button).toBeInTheDocument();
  });
  test("Should load input name inside Contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    //   const inputName = screen.getAllByPlaceholderText("name1");
    expect(inputName).toBeInTheDocument();
  });
  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    //   Querying
    // const inputBoxes = screen.screen.getByRole("input");   //this will not work
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);
    //will give us an array of 2 items(i.e 2 React element from Virtual DOM)
    // So, we have array of objects & these objects are basically React Element(input tag).
    //   console.log(inputBoxes[0]);
    //   console.log(inputBoxes.length);

    // ---------------------------------------------------------

    //   Assertion
    //   expect(inputBoxes.length).toBe(3);
    expect(inputBoxes.length).toBe(2);
  });
});
