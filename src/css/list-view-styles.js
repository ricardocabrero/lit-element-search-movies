import { css } from 'lit-element';

export const styles = css`
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 50px 0 0;
        padding: 0;
    }
    @media(max-width: 450px) {
        ul {
            margin-top: 30px;
        }
    }
    `