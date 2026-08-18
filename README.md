# web-component-demo

A small web app that shows how to build a basic Web Component (custom element + Shadow DOM) and compare it with a normal HTML button.

## Project structure

```
index.html              The page
css/styles.css          Simple styles for the page and both buttons
elements/button.js      The <custom-button> web component
```

## How to open the page

Open `index.html` in a browser, or from this folder run:

```bash
python3 -m http.server 8080
```

Then go to [http://localhost:8080](http://localhost:8080).

## What you will see

The page has two buttons side by side:

- **Web Component button** (`<custom-button>`) — red background, white text
- **Native button** (`<button>`) — white background, black border

They are styled separately on purpose, so you can tell them apart.

## How the web component works

1. `elements/button.js` defines a class that extends `HTMLElement`.
2. `attachShadow({ mode: 'open' })` creates a private Shadow DOM so the inner HTML stays separate from the rest of the page.
3. The `label` attribute becomes the button text (`label="Web Component Button"`).
4. `customElements.define('custom-button', CustomButton)` registers the tag. Custom tag names must contain a hyphen.
5. `part="button"` on the inner button lets `css/styles.css` style it with `custom-button::part(button)`. A normal `button { }` rule cannot reach inside Shadow DOM.

Use it in HTML like this:

```html
<custom-button label="Web Component Button"></custom-button>
<button type="button">Native Button</button>
```
