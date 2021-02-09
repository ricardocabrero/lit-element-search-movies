import { LitElement, html } from 'lit-element';
import './components/card-detail';

const URL_API = 'https://www.omdbapi.com/?apikey=',
API_KEY = 'a5182dec';

class DetailView extends LitElement {

    static get properties() {
        return {
            detail: { type: String },
            data: { type: Object }
        }
    }

    constructor() {
        super();
        this.data = {};
    }

    async fetchCall(detail) {
        const results = await fetch(`${URL_API}${API_KEY}&i=${detail}`) 
        const movies = await results.json();
        return movies;
    } 

    connectedCallback() {
        super.connectedCallback();
        this.fetchCall(this.detail)
            .then(res => this.data = res)
    }

    render() {
        const conditionalRender = Object.keys(this.data).length 
        ? html`<card-detail .data=${this.data}></card-detail>` 
        : html`<p>Loading....</p>`;
        return html`
        ${conditionalRender}
        `
    }
}

customElements.define('detail-view', DetailView);