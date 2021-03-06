import { LitElement, html } from 'lit-element';
import './list-items';
import '../components/center-text';
import '../components/loading-icon';

const URL_API = 'https://www.omdbapi.com/?apikey=',
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
        this.loading = true;
    }

    async fetchCall(data) {
        const results = await fetch(`${URL_API}${API_KEY}&s=${data}`);
        const movies = await results.json();
        this.results = movies['Search'];
        this.loading = false;
    } 

    update(props) {
        super.update(props);
        if(!props.get('results')) {
            this.fetchCall(this.data);
        }
    }
    
    render() {
        const conditionalRender = this.loading 
        ? html`<loading-icono><loading-icon>` 
        : html`<list-items .results=${this.results}></list-items>`;
        return html`
        <div class="get-results">
           ${conditionalRender}
        </div>`
    }
}

customElements.define('get-results', GetResults);