import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div>Страница не найдена</div>
      <Link to="/" end>
        Home
      </Link>
    </>
  );
};

export default NotFound;
