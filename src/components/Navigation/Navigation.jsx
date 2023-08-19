import { NavLinkStyled } from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/catalog">Adverts</NavLinkStyled>
      <NavLinkStyled to="/favorite">Favorite</NavLinkStyled>
    </nav>
  );
};
