import { LitElement, html } from 'lit-element';
import '../views/search-view';
import '../views/detail-view';

class MainView extends LitElement {
    static get properties() {
        return {
            switchView: { type: Boolean },
            data: { type: String },
            detail: { type: String }
        }
    }

    constructor() {
        super();
        this.switchView = true;
        this.data = '';
        this.detail = '';
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('form-data', this.handleFormData);
        this.addEventListener('view-detail', this.handleDetail);
    }

    handleFormData({detail}) {
        this.data = detail;
    }

    handleDetail({detail}) {
        const { viewDetail, id } = detail;
        this.switchView = viewDetail;
        this.detail = id;
    }

    render() {
        return html`
        <div class="main-view">
        ${this.switchView ? html`<search-view data=${this.data}></search-view>` : html`<detail-view detail=${this.detail}></detail-view>`}
        </div>`
    }
}

customElements.define('main-view', MainView);