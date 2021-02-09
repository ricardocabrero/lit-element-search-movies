import { LitElement, html } from 'lit-element';
import './card-item';
import { styles } from '../../css/list-view-styles';

class ListView extends LitElement {
    static get properties() {
        return {
            results: { type: Array },
            movie: { type: Object }
        }
    }

    static get styles() {
        return [styles]
    }

    render() {

        const conditionalRender = !this.results 
        ? html`<p>No results found</p>` 
        : html`${this.results.map(movie => html`<card-item .movie=${movie}></card-item>`)}`;

        return html`
        <ul>
        ${conditionalRender}
        </ul>`
    }
}

customElements.define('list-view', ListView)