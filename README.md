# basics-of-react

# Namaste React

- CDN means Content delivery network. These are the website where a library example react is hosted and we pull that library through urls(where all code is written there known as source code) to our project.
- After injecting the CDN React URLs in our project, react will be imported in our project.
- React is a JavaScript library.
- CDN URLs

```jsx
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- As we can see that, there are two URLs, the first one is about core react concepts and second URL is about DOM operations or the react DOM that we need to modify the DOM(document object model). It is kind of like a bridge that connects react with the browser. As we know, react is not all about browsers, as it works for mobile too as react-native.
- React.createElement(), is an **object** and it creates an element inside the react. It takes 3 arguments. first one is the tag, second is the object of attributes that we attach to the tag like id, class or anything random and third one is the content that the tag like h1 will contain.
- Because we are creating the tag inside the react, so, we are using React.createElement().
- Because this react element, we will use inside the DOM or browser, that’s why we use react dom libraries and create root method. ReactDOM.createRoot(). This will create a root and we will pass the root(any div with an id) inside it by document.getElementById(”id name of the root”).
- After that, to render the content, we will write root.render() and pass the element inside it.

```jsx
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World by React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

- React element is nothing but just an object(not an actual tag) and that object is passed inside the render method and the render method converts that object in to tag and put them on the DOM.
- To create nested elements, we create another react element in the third argument.
- To add sibling elements, we will add array of react elements in the third argument.

```jsx
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);
```

- if we put another element inside root div, then, that element will be replaced(not appended) by the react element.
- Order of elements matters in React.
- React is a JavaScript library because react can be applied or injected in a very small portion of an app unlike a framework that comes with a full-fledged size and a lot of baggage along with it.
