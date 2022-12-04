import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const LinkCastStyled = styled(NavLink)`
  &.active {
    background-color: blue;
  }
`;
export const LinkGoHomeStyled = styled(Link)`
  display: block;
  padding: 5px;
  background-color: #978a85;
  width: 80px;
  text-align: center;
  border-radius: 5px;
  color: white;
  margin-bottom: 5px;
`;

export const LinkReviewsStyled = styled(NavLink)`
  &.active {
    background-color: blue;
  }
`;

export const LinksStyled = styled.div`
  text-decoration: none;
  margin: 20px 0;

  a {
    text-decoration: none;
    padding: 10px;
    box-shadow: inset 0px 1px 0px 0px #bbdaf7;
    background: linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
    background-color: #79bbff;
    border-radius: 6px;
    border: 1px solid #84bbf3;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #528ecc;
    :hover {
      background: linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
      background-color: #378de5;
    }
    &.active {
      background: linear-gradient(to bottom, #3a9bfc 5%, #17599c 100%);
    }
  }
`;
