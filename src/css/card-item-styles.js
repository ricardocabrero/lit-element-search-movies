import { css } from 'lit-element';

export const cardItem = css`
    :host {
        width: 18%;
        margin: 0 1% 30px;
    }

    @media(max-width: 1024px) {
        :host {
            width: 23%; 
        }
    }

    @media(max-width: 900px) {
        :host {
            width: 31.33%; 
        }
    }

    @media(max-width: 767px) {
        :host {
            width: 48%; 
            margin-bottom: 20px;
        }
    }
    li {
        border-radius: 8px;
        box-shadow: rgb(187 186 186) 0px 0px 8px;
        height: 100%;
        transition: all .2s .05s;
    }

    li:hover {
        transform: scale(1.04);
        box-shadow: rgb(93 91 91) 0px 0px 10px;
    }

    a {
        text-decoration:none;
        color: inherit;
        display: block;
        height: 100%;
    }
    img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 8px 8px 0 0;
    }
    p {
        padding: 0 18px;
        word-break: break-word;
    }
    p:first-child {
        margin: 15px 0px;
        line-height: 20px;
    }
    `