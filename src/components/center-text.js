import { LitElement, html } from 'lit-element';
import { centerText } from '../css/center-text-styles';

class CenterText extends LitElement {
    static get properties() {
        return {
            text: { type: String }
        }
    }

    static get styles() {
        return [centerText]
    }

    render() {
        return html`
        <p class="center-text">${this.text}</p>`
    }
}

customElements.define('center-text', CenterText);