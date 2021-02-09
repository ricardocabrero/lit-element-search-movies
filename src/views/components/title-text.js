import { LitElement, html } from 'lit-element';
import { styles } from '../../css/title-text-styles';

class TitleText extends LitElement {
    static get properties() {
        return {
            title: { type: String }
        }
    }

    static get styles() {
        return [styles]
    }

    constructor() {
        super();
        this.title = 'Search Movies';
    }

    render() {
        return html`
        <h1>${this.title}</h1>`
    }
}

customElements.define('title-text', TitleText);