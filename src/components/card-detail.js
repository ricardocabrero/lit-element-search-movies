import { LitElement, html } from 'lit-element';
import { cardDetail } from '../css/card-detail-styles';
import '../components/toggle-star';

class CardDetail extends LitElement {
    static get properties() {
        return {
            data: { type: Object },
            toggle: { type: Boolean },
            storage: { type: Array },
        }
    }

    static get styles() {
        return [cardDetail]
    }

    constructor() {
        super();
        this.toggle = false;
        this.storage = JSON.parse(localStorage.getItem('favorites')) || [];
    }

    handleIsFavorite() {
        const isFavorite = this.storage.some(movie => movie.imdbID === this.data.imdbID);
        isFavorite ? this.toggle = true : this.toggle = false;
    }

    connectedCallback() {
        super.connectedCallback();
        this.handleIsFavorite();
    }

    render() {
        const { Title, Year, Genre, Director, Actors, Plot, Poster } = this.data;
        const conditionalPoster = Poster === 'N/A' ? '../../src/img/no-img-found.jpg' : Poster;

        return html`<article class="card-detail">
                        <toggle-star .toggle=${this.toggle} .data=${this.data}></toggle-star>
                        <div class="image">
                            <img src=${conditionalPoster} alt=${Title}>
                        </div>
                        <div class="text">
                            <h1>${Title}</h1>
                            <p>${Year}</p>
                            <p>${Genre}</p>
                            <p>${Director}</p>
                            <p>${Actors}</p>
                            <div class="sumary">
                                <p>${Plot}</p>
                            </div>
                        </div>
                    </article>`
    }
}

customElements.define('card-detail', CardDetail);