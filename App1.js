import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const para = <span>React element+</span>;
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    {para}{" "}
    {/* This is how we put React element inside another React element.  */}
    NamasteReact using JSX
  </h1>
);
console.log(jsxHeading); //object
// Here, as you can see that for a single element we don't need parent closing tag but for multiple lines we need that.
// const jsxHeading = (
//   <>
//     <h1 className="head" tabIndex="5">
//       NamasteReact using JSX
//     </h1>
//     <p>sss</p>
//   </>
// );

// React Functional Component(RFC) ---> Normal JS function which returns JSX.
// Naming convention of RFC starts with capital letter.
// const HeadingElement = () => {
//   return <h1>NamasteReact Functional Component</h1>;
// };
// or (2 ways of writing functional component)
const Title = () => <h1 className="heading">NamasteReact Title</h1>;
// Component Composition (as below we can see Title component inside Heading Component)
const num = 100;
const HeadingElement = () => (
  <div>
    <Title />
    <Title></Title>
    {Title()}
    {/* These 3 above things are same to render a component */}
    <p>{num + 20}</p>
    <p>{console.log("vwbwjbfs")}</p>
    {jsxHeading}
    {/* This is how we put React element(jsxHeading) inside Functional Component */}
    <h1 className="heading">NamasteReact Functional Component</h1>
  </div>
);
const style = (
  // This is how we put Functional component inside React element
  <em>
    This is italic style ====== <HeadingElement />
  </em>
);
// React element by using React
// const nestedElem = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "fwfff"),
//   React.createElement("h2", {}, "nntnt"),
//   React.createElement("h3", {}, "hmhld"),
// ]);

// React element by using JSX
// const nestedElem = <div className="title">
//   <h1>Bablu</h1>
//   <h2>Som</h2>
//   <h3>Kalu</h3>
// </div>

// React Functional Component & Component Composition
const LastHead = () => <h3>svvvvvvvvvvvvvvvsee</h3>;
const NestedElem = () => {
  return (
    <div className="title">
      <h1>bkneanbkegkneke</h1>
      <h2>iop3utongeeljbenkn</h2>
      <LastHead/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
// root.render(<HeadingElement />); //all functional component render like this
root.render(style);
// root.render(nestedElem);
root.render(<NestedElem/>);
