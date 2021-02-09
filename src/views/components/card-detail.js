import { LitElement, html } from 'lit-element';

class CardDetail extends LitElement {
    static get properties() {
        return {
            data: { type: Object }
        }
    }

    render() {
        const { Title, Year, Genre, Director, Actors, Plot, Poster } = this.data;

        return html`<article class="card-detail">
                        <div class="image">
                            <img src=${Poster} alt=${Title}>
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
                    </article>    ${JSON.stringify(this.data)}`
    }
}

customElements.define('card-detail', CardDetail);