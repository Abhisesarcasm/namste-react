"scripts": {
"start":"parcel index.html", ---> for development
"build":"parcel build index.html", ---> for production
"test": "jest"
},

now we don't have to write (npx parcel index.html) or (npx parcel build index.html )
shortcut = npm run start / npm start & npm run build but we can't do npm build it is just for start.

JSX and React are 2 separate things but we can integrate them.
JSX is not HTML. It is HTML like syntax.

const jsxHeading = (

  <h1 className="head" tabIndex="5">
    NamasteReact using JSX
  </h1>
);
This is not HTML.Also this is not a valid Javascript.

Browser which have a JS engine doesn't understand JSX it understand ECMA-Script(ES6) which boils down to pure JS.

Q==>So, how it is getting displayed on our browser then?

Ans:- JSX is transpiled to JS so that browser can understand.

Q==> Who is transpiling?
Ans:- Pracel is installing Babel which is a JS library/package. And parcel is manager of Babel.So, here Babel(JS compiler/transpiler) is transpiling the JSX.

So what is happening is JSX ==>(Babel converts it to this) ==>React.createElement => ReactElement-JS(object) ==> HTML element(rendered)

(How Babel converts our code---> go to Babel website and analyze)
Write this const head = <h1>cjscjcsj</h1> and see the transpiled code.
Babel also have many other superpowers go to website to read further it is very large.

---

There are many diffrences b/w HTML and JSX

1. like in HTML there is class and in JSX there is className
2. attributes in JSX follows camelCase

Also in the above jsxHeading when browser reads the transpiled code then we can see that by inspecting that tabIndex converted to tabindex (capital I to small i).And className to class.

Inside, JSX we can write JS by using {} inside this curly braces we can write our JS code.

Cross-site scripting (XSS) is an attack in which an attacker injects malicious executable scripts into the code of a trusted application or website.
So, let's say we get data by fetching it from Api and try to execute code based on that data inside our JSX and that data contains malacious data which can lead to (XSS) but the good thing is , JSX sanatize that code and keeps us prevented from those kind of action.
