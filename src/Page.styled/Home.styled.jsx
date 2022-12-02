import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeStyled = styled.ul`
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  list-style-type: none;
  li {
    padding: 10px;
    border-radius: 10px;
    width: 290px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
    overflow: hidden;
    transform: scale(1);
    transition: all 200ms linear;
    &:hover {
      transform: scale(1.05);
    }
  }
  p {
    padding: 10px;
    text-align: center;
    font-weight: 500;
    height: px;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  text-decoration: none;
  color: black;
`;
