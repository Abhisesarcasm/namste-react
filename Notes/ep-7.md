# useState

Never define state variable outside the component(this will give error).And when defining keep that in top.
Don't define local state variables inside any loop or conditions.(for loop / if-else or anything kinf of that.)

# useEffect

1. if no dependency array => useEffect is called on every render.
2. if dependency array is empty [] => useEffect is called on initial render(just once)
3. if dependency array present => called everytime a particular state is updated.

go to React-Dom-Router website and explore (which is a library and we have installed it).

These 2 property are given by react-router-dom
createBrowserRouter => it will create a Routing configuration in our App.
RouterProvider => this will provide the the Routing configuration to our App.

# { useRouteError }

This is the hook given by React-router-dom(RRD).
Note:- Anything start with (use) keyword is a hook in React.

=> Way-1

# -----------------------------------------------------------------------------------------------

const appRouter = createBrowserRouter([
{ path: "/", element: <AppLayout />, errorElement: <Error /> },
{ path: "/about", element: <About /> },
{ path: "/contact", element: <Contact /> },
]);

# -----------------------------------------------------------------------------------------------

=> Way-2 (We wanted that when we navigate through diffrent pages Header component should be there in every pages and under that our desired component should be there that's why we used children property in createBrowserRouter and after that we have used <Outlet> component under Header so that on navigating to diffrent pages diffrent component associated to those page will replace the <Outlet> component)

# -----------------------------------------------------------------------------------------------

const appRouter = createBrowserRouter([
{
path: "/",
element: <AppLayout />,
children: [
{ path: "/", element: <Body /> },
{ path: "/about", element: <About /> },
{ path: "/contact", element: <Contact /> },
],
errorElement: <Error />,
},
]);
--> <Outlet/> component is also given by RRD
And remember outlet component will not be there in our HTML & we can see that by inspecting (chrome dev tools). Actually outlet component gets replaced by the existing component of our App (Body,Contact,About).

# Linking the routing to our HTML elements so that when we click on HTML element we can navigate to the desired page.

-->( <Link to="/about">About</Link> ) [to in <Link> is similar to href in <a>.]

We will not use this <a href="/about">About</a> , we wil use <Link> tag bcoz <a> tag is not a good way in React bcoz the whole page gets refreshed when we route to somewhere.
And we want that when we navigate/route to any page the whole page should not get refreshed/reload.So to avoid that we use <Link> tag.

<Link> only refresh the component <a> refresh the whole page. With this discussion we that's why call React App as Single Page Application(SPA).

When we are navigating to diffrent pages see how our HTML changes and we can see it by inspecting.
2 types of Routing

1. Client Side Routing(C.S.R)
2. Server Side Routing(S.S.R) ---> <a> tag does this make network call and hits the server i.e the page is coming from the server.

# We also applied Dynamic Routing for each Restraunt

{resId} is the dynamic part while routing

Also, when we inspect we can see that <Link> tag is replaced by <a> tag bcoz browser don't understand what is <Link> tag.
Behind the scene<Link> is actually using <a> tag & it acts as a wrapper for <a> tag which we get from RRD.

 <Link to={"/restraunts/" + restraunt.info.id}  key={restraunt.info.id} > <RestrauntCard resData={restraunt} /> </Link>
 Here , we have provided key props to <Link> not to <RestrauntCard> bcoz in JSX we provide key to the parent element.
