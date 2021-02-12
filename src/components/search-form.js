import { LitElement, html } from 'lit-element';
import { searchForm } from '../css/search-form-styles';

class SearchForm extends LitElement {
    static get properties() {
        return {
            inputText: { type: String }
        }
    }

    static get styles() {
        return [searchForm]
    }

    constructor() {
        super();
        this.inputText = '';
    }

    handleChange({target}) {
        this.inputText = target.value;
    }

    handleSubmit(e) {
        e.preventDefault();

        if(!this.inputText.trim()) {
            return;
        }

        this.dispatchEvent( new CustomEvent('form-data', {
            bubbles: true,
            composed: true,
            detail: this.inputText,
        }));

        this.inputText = '';
    }

    render() {
       return html`
       <form @submit=${this.handleSubmit}>
        <div class="field">
        <input 
        @input=${this.handleChange}
        type="text" 
        placeholder="Search a movie..."
        .value=${this.inputText}>
        <button type="submit">Search</button>
        </div>
       </form>
       ` 
    }
}

customElements.define('search-form', SearchForm);