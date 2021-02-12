import { LitElement, html } from 'lit-element';
import { primaryButton } from '../css/primary-button-styles';

class BackButton extends LitElement {
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
        this.text = 'Back to results';
    }

    handleClick() {
        this.dispatchEvent( new CustomEvent('back-btn', {
            bubbles: true,
            composed: true,
        }));
    }

    render() {
        return html`<button @click=${this.handleClick}>${this.text}</button>`
    }
}

customElements.define('back-button', BackButton);