import { useState } from 'react';
import { FormStyled } from './SearchBar.styled';

const SearchBar = ({ submitSearchForm }) => {
  const [text, setText] = useState('');

  const handleInput = e => {
    setText(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    submitSearchForm(text);
  };

  return (
    <>
      <FormStyled onSubmit={submitForm}>
        <input type="text" onChange={handleInput} value={text} />
        <button type="submit">Search</button>
      </FormStyled>
    </>
  );
};

export default SearchBar;
