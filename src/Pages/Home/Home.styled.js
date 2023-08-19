import styled from "styled-components";
import bgImg from '../../img/Car.jpg';

export const StyledContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

export const PagesStyled = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeStyled = styled.div`
  margin-top: 0;
  width: 100%;
min-height: 100vh;
background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${bgImg});
`;

export const HomeTitleWrapStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 32px auto;
text-align: center;
`;

export const HomeTitleStyled = styled.h1`
font-family: 'Roboto';
  font-size: 46px;
  font-weight: 700;
  line-height: 1.3;
  color: #ffffff;
  margin-bottom: 300px;
`;

export const TextStyled = styled.p`
font-weight: 400;
  font-size: 30px;
  line-height: 1.2;
  color: #d3d3f5;
`;

