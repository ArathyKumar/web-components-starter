// This creates our own HTML tag: <custom-button>
// It uses Shadow DOM so its HTML stays separate from the rest of the page.
class CustomButton extends HTMLElement {

  constructor() {
    // Custom elements must call super() first.
    super();

    // Make a private area (Shadow DOM) to hold this button's HTML.
    // "open" means JavaScript on the page can still look inside it.
    this.attachShadow({ mode: 'open' });
  }

  // This runs when <my-button> is added to the page.
  connectedCallback() {
    // Add a button in the shadow root.
    // part="button" lets css/styles.css style it with ::part(button).
    this.shadowRoot.innerHTML = `
      <button part="button">${this.getAttribute('label')}</button>
    `;
    // this.getAttribute('label') reads label="..." from the HTML tag.
  }

}

// Tell the browser that <my-button> should use this class.
customElements.define('custom-button', CustomButton);