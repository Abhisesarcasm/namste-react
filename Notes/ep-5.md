Never ever keep the hard coded data inside the component.It can be data,image string,CDN link or anything.That's why we maintained a specific folder for that (utils) inside it constants.js & mockData.js are present.

# App is build based on UI Layer + Data Layer.

(props) = means properties

React is fast in efficient in DOM manipulation.
React also integrates/sync the UI Layer & Data Layer efficiently so that whenever data changes; UI will change accordingly.

# React Hooks

Normal JS utility function that facebook developers written when we do (npm i react) then these utility function comes along with it.

useState & useEffect are also utility function in React.
--> useState is a superpowerful state variable in react.
To be more specific, state are local variable i.e local state variable bcoz it's scope is inside the component.

Whenever, state variable changes/updates React will re-render the component-UI.

1. Virtual DOM is the representation of Actual DOM.
2. React Element is an object and this object keeps the React Virtual DOM.
3. Diff Algo finds out diffrence b/w Updated Virtual DOM & Previous Virtual DOM.
4. Whenever, there is a change in state variable React will find the diffrence b/w Updated Virtual DOM & Previous Virtual DOM & it will re-render the component and will update the Real DOM with only those nodes changed on which we done the update not the entire DOM tree.
5. Virtual DOM existed earlier but React took that concept & added Diff algo to it.

There is a button I want that whenever I click that button ; I want to display only top rated restaurants means whose rating is greater than 4.
So,let's assume that there are 10 restaurants card and whenever I click the button only 6 restaurants cards with rating greater then > 4 will get displayed and other as there rating is <= 4 will not get displayed.
So,whenever I click the button when I inspect it the top 10 restaurants that were getting displayed will show only 6 restaurants elements while we inspect and in Element section we can see the transition of our HTML content.

Reconciliation Algo(React Fiber)
go read about React Fiber
