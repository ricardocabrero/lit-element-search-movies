import { LitElement, html } from 'lit-element';
import { primaryButton } from '../css/primary-button-styles';

class FavoriteButton extends LitElement {
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
        this.text = 'Favorites';
    }

    handleClick() {
        this.dispatchEvent( new CustomEvent('view-favorite', {
            bubbles: true,
            composed: true,
        }));
    }

    render() {
        return html`<button @click=${this.handleClick}>${this.text}</button>`
    }
}

customElements.define('favorite-button', FavoriteButton);