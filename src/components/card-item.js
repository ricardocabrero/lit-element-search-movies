import { LitElement, html } from 'lit-element';
import { styles } from '../css/card-item-styles';

class CardItem extends LitElement {
    static get properties() {
        return {
            movie: { type: Object },
            switchView: { type: Boolean }
        }
    }

    static get styles() {
        return [styles]
    }

    constructor() {
        super();
        this.switchView = false;
    }

    handleDetail(e) {
        e.preventDefault();

        this.dispatchEvent(new CustomEvent('view-detail', {
            bubbles: true,
            composed: true,
            detail: { viewDetail: this.switchView, id: e.currentTarget.id }
        }));
    }

    render() {
        const { Title, Poster, Year, imdbID:id } = this.movie;
        return html`
        <li>
            <a @click=${this.handleDetail}
            id=${id} href="/" title="${Title} - click for detail">
                <img src=${Poster} alt=${Title}>
                <div class="text">
                    <p>${Title}</p>
                    <p>${Year}</p>
                </div>
            </a>
        </li>`
    }
}

customElements.define('card-item', CardItem)