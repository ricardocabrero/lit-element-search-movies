import { css } from 'lit-element';

export const styles = css`
    .detail-view {
        width: 100%;
        max-width: 600px;
        margin: 50px auto;
    }
    @media(max-width: 700px) {
        .detail-view {
            max-width: none;
            padding: 0 30px;
            box-sizing: border-box;
        } 
    }
    @media(max-width: 550px) {
        .detail-view {
            width: 90%;
            margin: 20px auto;
            padding: 0;
        }
    }
    `