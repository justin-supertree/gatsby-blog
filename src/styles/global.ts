import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export default css`
    ${emotionNormalize}
    html,
	body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
    }

    a {
        color: #7886b7;
    }

    a,
    a:hover {
        text-decoration: none;
    }

    p {
        margin: 0;
        padding: 0;
    }

    ul,
    li,
    ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    img {
        width: 100%;
    }

    button {
        display: inline-block;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        background-color: unset;
        -webkit-appearance: none;
        -moz-appearance: none;

        &:focus {
            outline: 0;
        }
        &:disabled {
            cursor: default;
        }
    }

    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 100%;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    #root {
        min-height: 100vh;
    }
`;