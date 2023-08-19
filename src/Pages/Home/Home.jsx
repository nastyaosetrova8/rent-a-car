import {
  PagesStyled,
  HomeTitleStyled,
  HomeTitleWrapStyled,
  TextStyled,
  StyledContainer,
  HomeStyled,
  ImgHomeWrapper,
  ButtonGoStyled,
} from './Home.styled';
import homeImg from '../../img/homeImg.jpg' 
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function Home() {
  return (
    <StyledContainer>
      <PagesStyled>
        <HomeStyled>
          <HomeTitleWrapStyled>
            <HomeTitleStyled>
              Welcome to AllAccess Auto Your Premier Car Rental Solution
            </HomeTitleStyled>
            <ImgHomeWrapper start data-aos="fade-right" data-aos-duration="3000">
            <img src={homeImg} alt='car' />
            </ImgHomeWrapper>
            <TextStyled>
            Our user-friendly online booking platform allows you to reserve your desired vehicle in just a few clicks.
            </TextStyled>
            <Link to="/catalog"> <ButtonGoStyled type='button'>Go</ButtonGoStyled></Link>
          </HomeTitleWrapStyled>
        </HomeStyled>
      </PagesStyled>
    </StyledContainer>
  );
}
