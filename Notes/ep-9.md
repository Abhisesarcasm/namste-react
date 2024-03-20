# Single Responsibility Principle(SRP)

Each component should have the responsibility that is associated with it not more than that.
for ex:-

<Header> should have the responsibility for dispalying & controlling only the Header only.
<RestrauntCard> must have the responsibility of displaying RestrauntCards only it should not be concerned with how we are fetching the data.

# Modularity

Breaking our APP into various modules(components) for maintainability.
--> If, we follow above 2 then our code will become Reusable,Testable,Maintainable.

# Now comes Custom Hooks into picture

=> What if our RestrauntMenu component will only be concerned or have only 1 responsibility that is to display only the data only.
=> It should not bother about how the data fetching is happening.

useRestaurantMenu() --> this is the custom hook
Hooks are utility/helper functions.That's why we create a file for custom hooks in utils folder(useRestaurantMenu.js).
And, now after doing this the main advantage we get is that our code becomes more clean.And by chance if any kind of error we get while fetching the data then now we will refer to useRestaurantMenu() instead of <RestaurantMenu>.

Similarly, useParams() hook is also depended like this.We can also make/create custom hooks & contribute to open source.(Try to build custom hooks & npm packages.)

Approach for creating any custom hooks
-> Just understand the purpose of what that hook does?
-> Then determine the input and output.
-> for ex:- useRestaurantMenu() input was resId and the output was restarunt data.

Similarly, useOnlineStatus() i/p is check if online/offline then o/p will be some boolean i.e return status(true/false).

==> The global window object that the browser provides us in that object many event listeners are associated with it we can inspect and see it.(by typing window/this).In this object, we get a [ online Event listener ].

# Important

Also, Browser also provide the capability to have an offline expirience that is why we can go to network tab & simulate an offline expirience.(Don't just turnoff internet instead do this.)

Now, we can understand how the dragon game comes when we go offline.

Here , we also applied green & red dot for online & offline respectively.

(It is not mandatory to "use" keyword for hooks but it is recommended by React.)

# parcel bundles all JS files of our App to one & we can see it in network tab JS section.

---> JS files size increases wrto numbers of component inside it.
---> To resolve this we use Chunking / Code-Splitting / Dynamic bundling / Lazy loading / On-demand loading

lazy() is a function that is given to us by react.It is a package from react.It is a named export.

const Grocery = lazy(() => import("./components/Grocery"));

Here, import is basically a function which takes the path of the grocery.Here , we are not importing it in a typical way.

So, when our App loads then the Grocery page will not be there. i.e all the code of that page will not load.Only, when we go to grocery page then only it will load.This is called Lazy loading / On-demand loading.

Now, when we load our webpage we can see in the network tab that the main JS bundle file doesn't have the Grocery.js file in it and when we go to grocery page then a separate js file gets created and we can see it in network and in our local in Dist folder also.(2 JS bundles are there.)
Q=> But, when we go to grocery page then we get error and why is that ?
Ans:- Bcoz, when our App loads for the first time there is no Grocery code and after that when we go to grocery page our browser takes some time to fetch adequate data to load our grocery page. And the time in which it is fetching data our React(really fast) tries to render our Grocery page and as we don't have the code for that we get an error.
So, to maintain the state of that particular time / to resolve the issue we use <Suspense fallback={}> given by react library.
Here,fallback is used until our grocery code is not there we want to display something inside it we can place a component also and write JSX also.

We can see the fallback when we switch to { appyly slow/fast 3G } in network tab.We can't see it earlier bcoz as our internet speed was very fast.So we simulated a slow net speed to see the fallback.

(Try to tell all these things in interview & read & explore React docs for various topics.)

Increasing Bundle size is bad for large scale application.That's why we use Lazy loading / On-demand loading.This is how we optimize our App.
---> This is how we can distribute the application into smaller bundles/chunks & this will make our App very performant.
