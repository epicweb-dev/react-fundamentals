# Basic JavaScript-rendered Hello World

## 📝 Your Notes

Elaborate on your learnings here in `src/exercise/01.md`

## Background

It doesn't take long to learn how to make "Hello World" appear on the page with
HTML:

```html
<html>
  <body>
    <div>Hello World</div>
  </body>
</html>
```

The browser takes this HTML code and generates
[the DOM (the Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
out of it. The browser then exposes the DOM to JavaScript so you can interact
with it to add a layer of interactivity to your web-page.

```html
<html>
  <body>
    <div>Hello World</div>
    <script type="module">
      // your JavaScript here
    </script>
  </body>
</html>
```

Years ago, people were generating HTML on the server and then adding JavaScript
on top of that generated HTML for interactivity. However, as requirements for
that interactivity became more challenging, this approach produced applications
that were difficult to maintain and had performance issues.

So modern JavaScript frameworks were created to address some of the challenges
by programmatically creating the DOM rather than defining it in hand-written
HTML.

## Exercise

Production deploys:

- [Exercise](http://react-fundamentals.netlify.app/isolated/exercise/01.html)
- [Final](http://react-fundamentals.netlify.app/isolated/final/01.html)

It's important to have a basic understanding of how to generate and interact
with DOM nodes using JavaScript because it will help you understand how React
works under the hood a little better. So in this exercise we're actually not
going to use React at all. Instead we're going to use JavaScript to create a
`div` DOM node with the text "Hello World" and insert that DOM node into the
document.

## Extra Credit

### 1. 💯 generate the root node

[Production deploy](http://react-fundamentals.netlify.app/isolated/final/01.extra-1.html)

Rather than having the `root` node in the HTML, see if you can create that one
using JavaScript as well.

## 🦉 Feedback

Fill out
[the feedback form](https://ws.kcd.im/?ws=React%20Fundamentals%20%E2%9A%9B&e=01%3A%20Basic%20JavaScript-rendered%20Hello%20World&em=).
