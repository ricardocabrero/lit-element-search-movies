import { css } from 'lit-element';

export const listView = css`
    :host {
        width: 100%;
    }
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
        justify-content: flex-start;
        margin: 50px 0 0;
        padding: 0 5%;
    }
    
    @media(max-width: 450px) {
        ul {
            padding: 0 2%;
            margin-top: 30px;
        }
    }
    `