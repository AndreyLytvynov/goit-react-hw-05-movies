import styled from 'styled-components';

export const CoastListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  li {
    min-height: 310px;
    width: calc((100% - 40px) / 5);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 7px 10px -6px rgba(0, 0, 0, 0.63);
    border: 1px solid rgba(243, 243, 243, 0.63);
    img {
      margin-top: 10px;
    }
    p {
      text-align: center;
    }
    & > :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
