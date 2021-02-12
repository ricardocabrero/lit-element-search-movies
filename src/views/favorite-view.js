import { LitElement, html } from 'lit-element';
import { favoriteView } from '../css/favorite-view-styles';
import '../components/list-items';
import '../components/back-button';
import '../components/clear-button';
import '../components/center-text';
import '../components/title-text';

class FavoriteView extends LitElement {
    static get properties() {
        return {
            results: { type: Array },
        }
    }

    static get styles() {
        return[favoriteView]
    }

    constructor() {
        super();
        this.results = JSON.parse(localStorage.getItem('favorites')) || [];
        this.addEventListener('clear-list', this.clearList)
    }

    clearList() {
        localStorage.clear();
        this.results = [];
    }

    render(){
        const conditionalRender = this.results.length 
        ? html`<list-items .results=${this.results}></list-items>`
        : html`<center-text text='Favorites list is empty'></center-text>`;

        return html`
        <div class="favorite-view">
        <title-text text='Favorite List'></title-text>
        <div>
        <back-button></back-button>
        <clear-button></clear-button>
        </div>
        ${conditionalRender}
        </div>`
    }
}

customElements.define('favorite-view', FavoriteView);