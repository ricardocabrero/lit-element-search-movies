import { LitElement, html } from 'lit-element';
import './list-view';

const URL_API = 'http://www.omdbapi.com/?apikey=',
API_KEY = 'a5182dec';

class GetResults extends LitElement {
    static get properties() {
        return {
            results: { type: Array },
            data: { type: String },
        }
    }

    constructor() {
        super();
        this.results = [];
    }

    async fetchCall(data) {
        const results = await fetch(`${URL_API}${API_KEY}&s=${data}`) 
        const movies = await results.json();
        return movies;
    } 

    updated() {
        super.updated();
        if(!this.data) {
            return;
        }
        this.fetchCall(this.data)
            .then(res => this.results = res['Search']);
    } 

    render() {
        return html`
        <div class="get-results">
            <list-view .results=${this.results}></list-view>
        </div>`
    }
}

customElements.define('get-results', GetResults);