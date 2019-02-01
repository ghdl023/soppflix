import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:white;
    }
    *{
        box-sizing:border-box;
    }
    body{
        /* font-size:12px; */
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:80px;
    }
`;

export default globalStyles;
