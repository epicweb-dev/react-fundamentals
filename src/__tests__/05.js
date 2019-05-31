import React from 'react'
import ReactDOMServer from 'react-dom/server.browser'
import prettyFormat from 'pretty-format'
import Usage from '../exercises-final/05'
// import Usage from '../exercises/05'

const {DOMElement, DOMCollection} = prettyFormat.plugins

// TODO: Improve this test...
expect.addSnapshotSerializer({
  test: val => typeof val === 'string',
  print: val => val,
})

test('renders the correct styles', () => {
  // we're doing this renderToStaticMarkup business because
  // for some reason rendering it like normally doesn't give
  // us the style props correctly.
  const html = ReactDOMServer.renderToStaticMarkup(<Usage />)
  const div = document.createElement('div')
  div.innerHTML = html

  const formattedHTML = prettyFormat(div.firstChild, {
    plugins: [DOMElement, DOMCollection],
  })
  expect(formattedHTML).toMatchSnapshot()
})
