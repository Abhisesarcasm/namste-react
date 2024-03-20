npm => It doesn't have any fullform you can name it anything.It doesn't stands for node package manager.But it manages the package.

Go to npm docs and read it is recommended

package.json == It is the configuration for npm and it is responsible for keeping track of what version of package is installed in our system.

packages = also known as dependencies

After package.json we can now install the dependencies

bundler = bundles our whole code (Bundle HTML,Css & JS)

npm i <dependency name> == normal dependency = used in production also
npm i -D <dependency name> == dev dependency = when we are developing our app

 "devDependencies": {
    "parcel": "^2.11.0",
    "process": "^0.11.10"
  },

^ (Caret) = for minor update = If new version of parcel comes let's say 2.11.1 then it will automatically upgrade and our app will not break
~ (Tilde) = for major update = i.e it directly works for major update let's say for parcel 3.1.0
^ is recommended over ~ bcoz if we apply (Tilde ~) then there is chances that many things in our app will break

---

package.lock.json == It keeps track of exact version of package.Let say parcel version upgraded from 2.8.3 to 2.8.4 then it will have 2.8.4 in it though package.json will have 2.8.3

In package.lock.json we have "integrity" which contains hash. Sometimes, our code is working good in local but not in production. So,to verify that the exact code is there in both local and production hash is important.

Node Module == Contains all the code/data that we fetch from npm for that dependency

Q=> Why extra folders are also there in node_modules?
Ans => For example :- (parcel) dependency contains other dependencies with it those dependencies contains other dependencies this is called Transistive Dependency. (Dependency Tree)

Q=> How many package.json ,package.lock.json are there in our application?
Ans => Not 2 more than that. Bcoz in node_modules as we can see that every package have their own package.json

Don't push node_modules to github.Bcoz we can regenerate it.
Github should not contain those folders which we can regenerate.

package.json & package.lock.json must be pushed to github bcoz with these we can recreate our app.

And even if we delete node_modules we can retrieve it by just npm install command. And this command will fetch all the necessary data and packages by the help of package.json & package.lock.json

We will ignite our app by using (parcel) package.

---

( npx parcel index.html )
here npx is for executing a package.

index.html is the source.

parcel just go to the source and build development for our app & host at port:number

---

CDN-Links ===> not a good way to use React.

npm i react & npm i react-dom

<script type="module" src="App.js"></script>

we use type="module" for not treating our App.js as a normal js file.And also as we can use import & export.

## Tasks that are done by (parcel) { Read about parcel documentation(parcel.org)}

# Dev build (build development)

# Create Local Server

# HMR = Hot Module Replacement == whenever we change something in our React app it automatically update our App. For ex:- Content inside <h1> gets changed at that time only our App got updated in the browser.

# File watching algoritm == written in C++

# Caching = for faster build

# Image optimization

# Minification

# Bundling

# Compress

# Consistent Hashing

# Code Spliting

# Diffrential Bundling = To support older browser so that our App runs in older versions of any browser

# Error Handling (Gives beautiful & better error messages)

# Diagnostic

# HTTPs mode

# Tree Shaking = Remove unused code for us.

( npx parcel build index.html )
It is way to tell npm that index.html is the entry point of our app.
And we will get error after running this commmand so we have to remove "main":"App.js" from package.json.

---

These 2 folders can be regenerated
(dist)
(.parcel-cache) = uses HMR
When , development build is generated then (dist) folder is created. And all the content of our App will come from this folder.And when we update our App content it will use (.parcel-cache)

So, here we can see in our terminal after running command (npx parcel build index.html) parcel compressed our files and gave 3 files of (HTML,CSS & JS).

---

So to make our App compatible for older versions. Let's use BrowsersList which is a package that npm offers and we can read about it on (browserslist.dev).
Go to package.json and mention it like this

 "browserslist": [
    "last 2 versions"
  ]
or
 "browserslist": [
    "last 2 Chrome versions"
  ]

All the above things that we have done to ignite our app is :- npx create-react-app my-app
