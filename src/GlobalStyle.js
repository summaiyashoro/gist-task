import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --gist-blue:#0058ffe0;
    --gist-blue-bg:#0058ffa3;
  }

  body{
    margin: 0;
    color: #626465;
    font-family: 'Poppins', sans-serif;
  }
  *{
    box-sizing: border-box;
  }
 
  .font-medium{
    font-weight:500;
  }

  .gistBlue-text{
    color:var(--gist-blue)
  }

  .gistBlue-bg{
    background-color:var(--gist-blue-bg);
  }

  .gist-wrapper{
    max-width: 66vw;
    margin: auto;
  }

  .card-body{
    margin: 0 50px;
  }

  .margin-vertical-20{
    margin:20px 0;
  }

  .flex-wrap{
    flex-wrap: wrap;
  }

  .remove-margin{
    margin:0;
  }
  
  .flex-wrap{
    display: flex;
    flex-wrap: wrap;
  }

  .margin-left-20{
    margin-left:20px;
  }
  
  .modal {
    position: fixed;
    z-index: 1; 
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
  }

  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  hr{
    height: 1px;
    border: none;
    background-color: #6060604a;
    box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.1), 0 1px 0px 0 rgba(0, 0, 0, 0.1);
  }

  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @media only screen and (max-width: 768px){
    .gist-wrapper{
      max-width: 100%;
    }
    .card-body{
      margin: 0;
      text-align: end;
    }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default GlobalStyles;
