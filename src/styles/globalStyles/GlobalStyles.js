import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    };
    html{
        --color-first: #14213d;
        --color-second:#000000 ;
        --color-thirst:#fca311;
        --color-back:#e5e5e5;
        --color-letter:#ffffff;
        --color-extra:#1d3160;
        
    }
    body{
        max-width: 1500px;
        margin: 0 auto;
    }

    button{
        :hover{
            outline: none;
        }
        :focus{
            text-decoration: none;
            outline: none;
        }
    }

`