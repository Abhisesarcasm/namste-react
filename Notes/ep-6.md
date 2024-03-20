Approach-1 (Bad UX)
Loads ----> Fetch API ----> Render
Approach-2 (Good UX)
Loads ----> Render ----> Fetch API ----> Render

1. For 2nd approach only we use useEffect.
2. And due to the second approach our component get rendered 2 times. First the initial Render and second time is when the API data gets fetched and executed in our code.(Here we can see that "Body Rendered" got printed 2 times in our console.)

When we fetch data from API and that data is link to our local state variable & when the state variable changes the UI is rendered.(we manage this through useState hook.)

When, our components render after that useEffect callback is executed.So, if we have to do sth after rendering the component I have to write it inside the useEffect.

When, we tried to fetch Swiggy data API from our local we got an error in our console that blocked CORS policy.Bcoz, we are trying to fetch data of one origin(Swiggy) from another origin(Local). -->To resolve it and bypass the CORS we use Allow CORS extension.

---> Not a good way
json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
---> Optional Chianing is a good way
json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

Q :- Is adding spinning loader till our data is not fetched is a good UX ?
Ans :- No, to avoid it we use Shimmer UI.

Shimmer UI = We load a fake page until we get data from API.For better UX.

Even if all big startups and companies like Zomato, Swiggy & Youtube use Shimmer UI (Go and notice that by refreshing the page.)

And in Header component whenever I click the Login/Logout Button it will re-render my whole Header Component.Render actually means when any event is triggered immediately it will call the Component which is a function.

Whenever, we change/update local state variable React will trigger a Re-conciliation cycle. (re-render the component.)

Also, in my serach-bar whenever I am changing the input field each time. i.e for each typing of word it will re-render the whole body component & we can see this in our console.

# Reconciliation is making the React faster.

# Vital observation when we are inspecting our code in chrome tools.

When we search for a particular restraunt in our search-bar or else when I click for Top Rated Restraunts we can see that in Chrome Dev Tools , Elements tab our code is getting modified when we do these changes/updates when I serach for sth in search-bar our value attribute of input gets manipulated and after clicking top rated restraunts also we can see the no. of cards are getting reduced. And we can see these things in Elements tab.

Also we created a separate state variable filteredRestraunts bcoz, earlier without this when we use to search restaurants , for the first time it will search from the total amount of available cards and and after filtering it will show the desired card.But after the second time when we search for the restaurants it will search from the filtered card and in case in our filtered card if our desired restaurant card is not there our code will break.So to avoid it we have used filteredRestraunts so that original state variable will be intact.

This below method we have used to bypass CORS without using any extensions/plugins visit this website ---->(https://cors.sh/) to get temporary API key(valid for only 3 days.)

    const data = await fetch('https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.4668716&lng=83.9811665&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
      headers: {
      'x-cors-api-key': 'temp_8defcc77e5b1a02e6d44972b5c2b950c'
      }
    })
