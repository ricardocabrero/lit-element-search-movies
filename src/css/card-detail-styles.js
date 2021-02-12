import { css } from 'lit-element';

export const cardDetail = css`
    .card-detail {
        width: 100%;
        display: flex;
        margin: 50px 0;
        border-radius: 15px 0 15px 15px;
        background: #fff;
        box-shadow: 0 0 10px #ccc;
        position: relative;
    }
    @media(max-width: 550px) {
        .card-detail {
            flex-direction: column;
            margin-top: 20px;
        }
        h1 {
            margin: 5px 0;
        }
    }
    .image {
        width: 40%;
        border-radius: 15px 0 0 15px;
        background: #f6f6f6;
    }
    @media(max-width: 550px) {
        .image {
            width: 100%;
            border-radius: 15px 15px 0 0;
        }
    }
    img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 15px 0 0 15px;
    }
    @media(max-width: 550px) {
        img {
            border-radius: 15px 15px 0 0;
        }
    }
    .text {
        width: 60%;
        padding: 5px 15px;
    }
    @media(max-width: 550px) {
        .text {
            padding-bottom: 25px;
            width: 100%;
            box-sizing: border-box;
        }
    }
    .text p {
        font-size: 14.5px;
    }
    @media(max-width: 550px) {
        .text p {
            margin: 8px 0;
        }
    }
    `