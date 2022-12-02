import styled from 'styled-components';

export const FormStyled = styled.form`
  position: relative;
  margin-bottom: 20px;
  input {
    width: 30%;
    padding: 6px 24px;
    border: 2px solid #ccc;
    border-radius: 6px;
    box-shadow: 0px 1px 15px -6px rgba(0, 0, 0, 0.75);
  }
  button {
    position: absolute;
    background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
    background-color: #f9f9f9;
    border-radius: 6px;
    border: 1px solid #dcdcdc;
    display: inline-block;
    cursor: pointer;
    color: #747373;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    left: 350px;
    box-shadow: 0px 1px 15px -6px rgba(0, 0, 0, 0.75);
  }
`;

// .myButton {
// box-shadow:inset 0px 1px 0px 0px #ffffff;
// background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
// background-color:#f9f9f9;
// border-radius:6px;
// border:1px solid #dcdcdc;
// display:inline-block;
// cursor:pointer;
// color:#666666;
// font-family:Arial;
// font-size:15px;
// font-weight:bold;
// padding:6px 24px;
// text-decoration:none;
// text-shadow:0px 1px 0px #ffffff;
// }
// .myButton:hover {
// 	background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
// 	background-color:#e9e9e9;
// }
// .myButton:active {
// 	position:relative;
// 	top:1px;
// }
