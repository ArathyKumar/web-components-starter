# Web Components Starter

A simple, practical guide to understanding and building native **Web Components** using plain HTML, CSS, and JavaScript—no external frameworks required.

## What are Web Components?

Think of Web Components as custom, reusable Lego bricks for websites. Standard HTML gives you basic tags like `<button>`, `<img>`, and `<h1>`. Web Components let you create your own custom tags—like `<user-card>` or `<shopping-cart>`—that combine layout, styles, and logic into one isolated package.

This starter uses that idea in a small demo: a `<custom-button>` next to a normal `<button>`.

## Core building blocks

Web Components rely on three browser-native technologies:

| Building block | Role |
| --- | --- |
| **Custom Elements** | APIs to define new HTML tags and their custom behaviors in JavaScript. |
| **Shadow DOM** | An isolated DOM tree attached to an element that keeps its CSS and HTML scope separate from the main document, so styles do not leak by accident. |
| **HTML Templates** (`<template>` and `<slot>`) | Markup fragments that do not render until instantiated, so you can pass custom user content into predefined slots. |

Shadow DOM keeps most page CSS out of the inner button. This project makes one exception on purpose: `part="button"` lets `css/styles.css` style that inner button with `::part`.

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
