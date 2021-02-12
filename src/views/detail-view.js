import { LitElement, html } from 'lit-element';
import '../components/card-detail';
import '../components/back-button';
import '../components/title-text';
import '../components/favorite-button';
import '../components/center-text';
import '../components/loading-icon';
import { styles } from '../css/detail-view-styles';

const URL_API = 'https://www.omdbapi.com/?apikey=',
API_KEY = 'a5182dec';

class DetailView extends LitElement {

    static get properties() {
        return {
            detail: { type: String },
            data: { type: Object }
        }
    }

    static get styles() {
        return [styles]
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
        : html`<loading-icon></loading-icon>`;

        return html`
        <div class="detail-view">
        <title-text text='Movie Detail'></title-text>
        <back-button></back-button>
        <favorite-button></favorite-button>
        <explain-text text='*Click on the star to add or remove from favorites list.'></explain-text>
        ${conditionalRender}
        </div>`
    
    }
}

customElements.define('detail-view', DetailView);