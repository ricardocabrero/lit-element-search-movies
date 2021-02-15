import { css } from 'lit-element';

export const toggleStar = css`
    span {
        font-family: "star";
        font-style: normal;
        font-weight: normal;    
        display: inline-block;
        text-decoration: inherit;
        width: 1em;
        margin-right: .2em;
        text-align: center;
        font-variant: normal;
        text-transform: none;
        position: absolute;
        right: 0;
        top: 0;
        margin: 0;
        width: 0;
        height: 0;
        border-top: 70px solid rgb(13, 110, 253);
        border-left: 70px solid transparent;
        color: #fff;
        font-size: 22px;
        -webkit-tap-highlight-color: transparent;
    }

    span.selected{
        color: yellow;
    }

    span:before {
        cursor:pointer;
        content: "\\E800";
        position: absolute;
        left: -30px;
        top: -62px;
    }
    
        /* fix buttons height, for twitter bootstrap */
        line-height: 1em;
        
        /* you can be more comfortable with increased icons size */
        /* font-size: 120%; */
    
        /* Font smoothing. That was taken from TWBS */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    
        /* Uncomment for 3D effect */
        /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
    }
    span:before {
        content: '\\E800';
    }
    `