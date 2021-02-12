import { LitElement, html } from 'lit-element';
import '../views/search-view';
import '../views/detail-view';
import '../views/favorite-view';

class MainView extends LitElement {
    static get properties() {
        return {
            switchView: { type: String },
            data: { type: String },
            detail: { type: String }
        }
    }

    constructor() {
        super();
        this.switchView = 'search-view';
        this.data = '';
        this.detail = '';
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('form-data', this.handleFormData);
        this.addEventListener('view-detail', this.handleDetail);
        this.addEventListener('back-btn', this.handleBack);
        this.addEventListener('view-favorite', this.handleFavorite);
    }

    handleFormData({detail}) {
        this.data = detail;
    }

    handleDetail({detail}) {
        const { id } = detail;
        this.detail = id;
        this.switchView = 'detail-view';
    }

    handleBack() {
        this.switchView = 'search-view'
    }

    handleFavorite() {
        this.switchView = 'favorite-view';
    }

    handleViews() {
        switch(this.switchView) {
            case 'search-view':
                return html`<search-view .data=${this.data}></search-view>`;
            case 'detail-view': 
                return html`<detail-view detail=${this.detail}></detail-view>`;
            case 'favorite-view':
                return html`<favorite-view></favorite-view>`;
            default:
                return html`<search-view data=${this.data}></search-view>`;
        }
    }

    render() {
        return html`
        <div class="main-view">
        ${this.handleViews()}
        </div>`
    }
}

customElements.define('main-view', MainView);