import React from 'react';
import { Link } from 'react-router-dom';

import { NotFoundStyled } from 'Page.styled/NotFound.styled';

const NotFound = () => {
  return (
    <>
      <NotFoundStyled>
        <img
          src="https://project-seo.net/wp-content/uploads/2019/10/404-not-found.jpg"
          alt=""
          width={1200}
        />
        <Link to="/">Go to Home</Link>
      </NotFoundStyled>
    </>
  );
};

export default NotFound;
