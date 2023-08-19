import {
  PagesStyled,
  HomeTitleStyled,
  HomeTitleWrapStyled,
  TextStyled,
  StyledContainer,
  HomeStyled,
} from './Home.styled';

export default function Home() {
  return (
    <StyledContainer>
      <PagesStyled>
        <HomeStyled>
          <HomeTitleWrapStyled>
            <HomeTitleStyled>
              Welcome to AllAccess Auto Your Premier Car Rental Solution
            </HomeTitleStyled>
            <TextStyled>
            Our user-friendly online booking platform allows you to reserve your desired vehicle in just a few clicks.
            </TextStyled>
          </HomeTitleWrapStyled>
        </HomeStyled>
      </PagesStyled>
    </StyledContainer>
  );
}
