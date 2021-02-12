import { css } from 'lit-element';

export const favoriteView = css`
    .favorite-view {
        margin: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media(max-width: 550px) {
        .favorite-view {
            margin: 20px auto;
        }
    }
    `