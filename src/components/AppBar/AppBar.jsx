import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
import { StyledContainer } from 'Pages/Home/Home.styled';

export const AppBar = () => {
  return (
    <Header>
      <StyledContainer>
      <Navigation />
      </StyledContainer>
    </Header>
  );
};
