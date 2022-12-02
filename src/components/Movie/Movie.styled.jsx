import styled from 'styled-components';

export const MovieStyled = styled.div`
  & > :not(:last-child) {
    margin-bottom: 10px;
  }
  ul {
    margin-left: 10px;
    display: flex;
    list-style-type: none;
    li:not(:last-child) {
      margin-right: 5px;
    }
  }
  span {
    font-weight: 500;
  }
  div {
    display: flex;
  }
`;

// export const FormStyled = styled.form`
