import { LitElement, html } from 'lit-element';
import { titleText } from '../css/title-text-styles';

class TitleText extends LitElement {
    static get properties() {
        return {
            text: { type: String }
        }
    }

    static get styles() {
        return [titleText]
    }

    constructor() {
        super();
        this.text = 'Search Movies';
    }

    render() {
        return html`
        <h1>${this.text}</h1>`
    }
}

customElements.define('title-text', TitleText);