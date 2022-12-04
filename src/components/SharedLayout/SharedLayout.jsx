import { Outlet, Link } from 'react-router-dom';

import { Container, Header, Logo, LinkStyled } from './SharedLayout.styled';
import { FcFilmReel } from 'react-icons/fc';

// FcFilm;

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <Link to="/">
            <FcFilmReel size={30} />
          </Link>
        </Logo>
        <nav>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/movies">Movies</LinkStyled>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
