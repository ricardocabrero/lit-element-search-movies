import { LitElement, html } from 'lit-element';
import { loadingIcon } from '../css/loading-icon-styles';

class LoadingIcon extends LitElement {
    static get properties() {
        return {
            icon: { type: String }
        }
    }

    static get styles() {
        return [loadingIcon]
    } 
    
    constructor() {
        super();
        this.icon = '../../src/img/loading.gif';
    }

    render() {
        return html`
        <p>
            <img src=${this.icon}>
        <p>`
    }
}

customElements.define('loading-icon', LoadingIcon);