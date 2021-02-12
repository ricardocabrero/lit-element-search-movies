import { LitElement, html } from 'lit-element';
import { primaryButton } from '../css/primary-button-styles';

class ClearButton extends LitElement {
    static get properties() {
        return {
            text: { type: String }
        }
    }

    static get styles() {
        return [primaryButton]
    }

    constructor() {
        super();
        this.text = 'Clear list';
    }

    clearList() {
        this.dispatchEvent( new CustomEvent('clear-list', {
            bubbles: true,
            composed: true,
        }));
    }

    render() {
        return html`<button @click=${this.clearList}>${this.text}</button>`
    }
}

customElements.define('clear-button', ClearButton);