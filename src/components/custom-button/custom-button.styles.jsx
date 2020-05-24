import styled from 'styled-components';

const CustomButtonDefault = css`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content:center;

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    }
`


const GoogleSignIn = css`
    background-color:#4285f4;
    color:#fff;

    &:hover{
        background-color:#357ae8;
        border:none;
    }
`

const Inverted = css`
    background-color: #fff;
    color:#000;
    border: 1px solid #000;

    &:hover{
      background-color: black;
      color:#fff;
      border:none;
    }
`