
import { css } from 'lit-element';

export const searchForm = css`
    :host {
        display: flex;
        justify-content: center;
    }
    .field {
        width: 250px;
        margin: 0 auto;
        display: flex;
        height: 28px;
    }
    button {
        font-size: 14px;
        background: rgb(13, 110, 253);
        box-shadow: rgb(150 149 149) 0px 0px 1px;
        border: none;
        border-radius: 0px 4px 4px 0px;
        color: rgb(255, 255, 255);
        letter-spacing: 0.5px;
        padding: 3px 8px;
        height: 100%;
        line-height: 17px;
        box-sizing: border-box;
        cursor: pointer;
        outline: none;
        width: 70px;
    }
    input {
        height: 100%;
        padding: 3px 6px;
        font-size: 16px;
        box-sizing: border-box;
        outline: none;
        border: 1px solid rgb(204, 204, 204);
        border-radius: 3px 0px 0px 3px;
        -webkit-box-shadow: none;
        box-shadow: none;
        width: 180px;
    }
    `