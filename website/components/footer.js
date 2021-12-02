// ===-----------------------------------------------------------------------------------===
// Copyright (c) 2021 Calinescu Mihai, Bencu Bogdan
//
// For copying notice, see https://github.com/CMihai99/medita/blob/main/COPYING.
// For licenses we use, see https://github.com/CMihai99/medita/tree/main/LICENSES.
// ===-----------------------------------------------------------------------------------===

class footer extends HTMLElement {
  // connectedCallback is used to add a footer to the page.
  // It runs each time your custom element is inserted into the DOM.
  connectedCallback() {
    this.innerHTML =
    `
    <footer>
      <div class="title-section">
        <h2>Medita</h2>
        <p>Description</p>
        <p>© 2021 <a href="/website/html/trademark.html" title="Medita Limited">Medita Limited</a></p>
        <p>by Calinescu Mihai</p>
      </div>

      <div class="section">
        <h3>Medita</h3>

        <ul>
          <li>
            <a href="/website/html/invite.html" title="Add to server" target="_blank">Add to server</a>
          </li>
          <li>
            <a href="/website/html/commands/index.html" title="Commands">Commands</a>
          </li>
        </ul>
      </div>

      <div class="section">
        <h3>Resources</h3>

        <ul>
          <li>
            <a href="/website/html/resources/contact.html" title="Contact">Contact</a>
          </li>
          <li>
            <a href="/website/html/resources/docs.html" title="Documentation">Documentation</a>
          </li>
        </ul>
      </div>

      <div class="section">
        <h3>Legal</h3>

        <ul>
          <li>
            <a href="/website/html/legal/tos.html" title="Terms of Service">Terms of Service</a>
          </li>
          <li>
            <a href="/website/html/legal/privacy.html" title="Privacy Policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
    `;
  }
}

// Register component
customElements.define("footer-component", footer);
