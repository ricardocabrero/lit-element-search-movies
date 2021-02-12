import { LitElement, html } from 'lit-element';
import { cardItem } from '../css/card-item-styles';

class CardItem extends LitElement {
    static get properties() {
        return {
            movie: { type: Object },
            switchView: { type: Boolean }
        }
    }

    static get styles() {
        return [cardItem]
    }

    handleDetail(e) {
        e.preventDefault();

        this.dispatchEvent(new CustomEvent('view-detail', {
            bubbles: true,
            composed: true,
            detail: { id: e.currentTarget.id }
        }));
    }

    render() {
        const { Title, Poster, Year, imdbID:id } = this.movie;
        const conditionalPoster = Poster === 'N/A' ? '../../src/img/no-img-found.jpg' : Poster;
        return html`
        <li>
            <a @click=${this.handleDetail}
            id=${id} href="/" title="${Title} - click for detail">
                <img src=${conditionalPoster} alt=${Title}>
                <div class="text">
                    <p>${Title}</p>
                    <p>${Year}</p>
                </div>
            </a>
        </li>`
    }
}

customElements.define('card-item', CardItem)