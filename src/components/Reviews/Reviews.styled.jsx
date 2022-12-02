import styled from 'styled-components';

export const ReviewsListStyled = styled.ul`
  gap: 5px;
  li {
    padding: 20px;
    text-align: start;

    flex-direction: column;
    box-shadow: 2px 7px 10px -6px rgba(0, 0, 0, 0.63);
    border: 1px solid rgba(243, 243, 243, 0.63);
    p {
    }
    & > :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
