import { LitElement, html } from 'lit-element';
import '../components/title-text';
import '../components/explain-text';
import '../components/search-form';
import '../components/get-results';
import { styles } from '../css/search-view-styles';

class SearchView extends LitElement {
    static get properties() {
        return {
            results: { type: Array },
            data: { type: String }
        }
    }

    static get styles() {
        return [styles]
    }

    render() {
        const conditionalRender = this.data && html`<get-results data=${this.data}></get-results>`;
        
        return html`
        <div class="search-view">
            <title-text></title-text>
            <search-form></search-form>
            <explain-text></explain-text>
            ${conditionalRender}
        </div>`
    }
}

customElements.define('search-view', SearchView);