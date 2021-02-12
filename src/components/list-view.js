import { LitElement, html } from 'lit-element';
import './card-item';
import './center-text';
import { listView } from '../css/list-view-styles';

class ListView extends LitElement {
    static get properties() {
        return {
            results: { type: Array },
            movie: { type: Object },
            text: { type: String }
        }
    }

    static get styles() {
        return [listView]
    }

    render() {
        const conditionalRender = !this.results 
        ? html`<center-text text='No results found'></center-text>` 
        : html`<ul>${this.results.map(movie => html`<card-item .movie=${movie}></card-item>`)}</ul>`;

        return html`
        ${conditionalRender}`
    }
}

customElements.define('list-view', ListView)