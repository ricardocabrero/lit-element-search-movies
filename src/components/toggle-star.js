import { LitElement, html } from 'lit-element';
import { toggleStar } from '../css/toggle-star-styles';

class ToggleStar extends LitElement {
    static get properties() {
        return {
            storage: {
                type: Array,
            },
            data: {
                type: Object,
            },
            toggle: { 
                type: Boolean,
            },
            classT: {
                type: String,
            }
        }
    }

    static get styles() {
        return [toggleStar]
    } 

    constructor() {
        super();
        this.classT = ``;
        this.storage = JSON.parse(localStorage.getItem('favorites')) || [];
    }

    handleToggle() {
        this.toggle = !this.toggle;
        this.toggle 
        ? (this.classT = `selected`, this.handleStorageAdd()) 
        : (this.classT = ``, this.handleStorageDelete());
    }

    handleStorageAdd() {
        this.storage = [...this.storage, this.data];
        localStorage.setItem('favorites', JSON.stringify(this.storage));
    }

    handleStorageDelete() {
        this.storage = this.storage.filter(movie => movie.imdbID !== this.data.imdbID);
        localStorage.setItem('favorites', JSON.stringify(this.storage));
    }
    
    render() {
        this.toggle ? this.classT = `selected` : this.classT = ``;
        return html`<span @click=${this.handleToggle} class=${this.classT}>
        </span>`
    }
}

customElements.define('toggle-star', ToggleStar)