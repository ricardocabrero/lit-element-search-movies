import { LitElement, html } from 'lit-element';
import { explainText } from '../css/explain-text-styles';

class ExplainText extends LitElement {

    static get properties() {
        return {
            text: { type: String }
        }
    }

    static get styles() {
        return [explainText]
    }

    constructor() {
        super();
        this.text = 'Please search using the form (full title or keyword).'
    }

    render() {
        return html`
        <p><small>${this.text}</small></p>`
    }
}

customElements.define('explain-text', ExplainText);