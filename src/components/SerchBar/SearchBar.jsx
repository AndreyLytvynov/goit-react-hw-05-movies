import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { FormStyled } from './SearchBar.styled';

const SearchBar = ({ submitSearchForm }) => {
  const [text, setText] = useState('');

  const handleInput = e => {
    setText(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    if (text.trim() === '') {
      toast('Please enter films name');
      return;
    }
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

SearchBar.ropTypes = {
  submitSearchForm: PropTypes.func.isRequired,
};
