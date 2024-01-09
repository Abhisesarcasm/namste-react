const heading = React.createElement(
  //This createElement comes from the first link which is a core React feature.
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);
// This createElement takes 3 parameters and this object {} is used to give attributes to the tag and the 3rd parameter is children
// And these last 2 parameters are called props collectively
console.log("heading", heading); // object

{
  /* <div id="parent">
  <div id="child1">
    <h1></h1>
    <h2></h2>
  </div>
  <div id="child2">
    <h1></h1>
    <h2></h2>
  </div>
</div>; */
}
// This is the React code for above html structure
const parent = React.createElement(
  //==>when we do createElement it not creating a HTML element instead it is creating a React Element which is a object after that the object is converted to HTML element by render method.
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I'm in h1 tag"),
      React.createElement("h2", {}, "I'm in h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm in h1 tag"),
      React.createElement("h2", {}, "I'm in h2 tag"),
    ]),
  ]
);
console.log("parent", parent);
// After loging in console we get a object i.e this heading element is a React object.
const root = ReactDOM.createRoot(document.getElementById("root")); // This createRoot comes from 2nd link which we use for DOM manipulation.
// root.render(heading);
root.render(parent);

//----->this render method will take the heading object and convert it to HTML tag and the browser then display that HTML tag.

// Library v/s Framework
// Framework comes with a lot of packages and Library is something that we can even use for a small portion of our project i.e as here we are using React only in div id=root for rendering.
