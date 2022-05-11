# Intro to raw React APIs

## 📝 Your Notes

Elaborate on your learnings here in `src/exercise/02.md`

## Background

React is the most widely used frontend framework in the world and it's using the
same APIs that you're using when it creates DOM nodes.

> In fact,
> [here's where that happens in the React source code](https://github.com/facebook/react/blob/48907797294340b6d5d8fecfbcf97edf0691888d/packages/react-dom/src/client/ReactDOMComponent.js#L416)
> at the time of this writing.

React abstracts away the imperative browser API from you to give you a much more
declarative API to work with.

> Learn more about the difference between those two concepts here:
> [Imperative vs Declarative Programming](https://tylermcginnis.com/imperative-vs-declarative-programming/)

One important thing to know about React is that it supports multiple platforms
(for example, native and web). Each of these platforms has its own code
necessary for interacting with that platform, and then there's shared code
between the platforms.

With that in mind, you need two JavaScript files to write React applications for
the web:

- React: responsible for creating React elements (kinda like
  `document.createElement()`)
- ReactDOM: responsible for rendering React elements to the DOM (kinda like
  `rootElement.append()`)

## Exercise

Production deploys:

- [Exercise](http://react-fundamentals.netlify.app/isolated/exercise/02.html)
- [Final](http://react-fundamentals.netlify.app/isolated/final/02.html)

Let's convert this to use React! But don't worry, we won't be doing any JSX just
yet... You're going to use raw React APIs here.

In modern applications you'll get React and React DOM files from a "package
registry" like [npm](https://npmjs.com) ([react](https://npm.im/react) and
[react-dom](https://npm.im/react-dom)). But for these first exercises, we'll use
the script files which are available on [unpkg.com](https://unpkg.com) and
regular script tags so you don't have to bother installing them. So in the
exercise you'll be required to add script tags for these files.

Once you include the script tags, you'll have two new global variables to use:
`React` and `ReactDOM`.

Here's a simple example of the API:

```javascript
const elementProps = {id: 'element-id', children: 'Hello world!'}
const elementType = 'h1'
const reactElement = React.createElement(elementType, elementProps)
const root = ReactDOM.createRoot(rootElement)
root.render(reactElement)
```

> 🦉 NOTE: prior to React v18, the API was: `ReactDOM.render` and that's what
> you'll see in the EpicReact.dev videos. This material has been updated, so
> you'll want to use the new `ReactDOM.createRoot` API as demonstrated above.

Alright! Let's do this!

## Extra Credit

### 1. 💯 nesting elements

[Production deploy](http://react-fundamentals.netlify.app/isolated/final/02.extra-1.html)

See if you can figure out how to write the JavaScript + React code to generate
this DOM output:

```html
<body>
  <div id="root">
    <div class="container">
      <span>Hello</span>
      <span>World</span>
    </div>
  </div>
</body>
```

## 🦉 Feedback

Fill out
[the feedback form](https://ws.kcd.im/?ws=React%20Fundamentals%20%E2%9A%9B&e=02%3A%20Intro%20to%20raw%20React%20APIs&em=).
