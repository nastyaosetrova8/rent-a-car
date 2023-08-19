import styled from 'styled-components';

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
  background-color: rgb(3, 10, 87);
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
  color: rgb(255, 255, 255);
  margin-bottom: 64px;
`;

export const ImgHomeWrapper = styled.div`
  margin-bottom: 24px;

  & img {
    width: 100%;
  }
`;

export const TextStyled = styled.p`
  font-weight: 400;
  font-size: 30px;
  line-height: 1.2;
  color: rgb(211, 211, 245);
  margin-bottom: 14px;
`;


export const ButtonGoStyled = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 22px;
  color: rgba(11, 68, 205, 1);
  background-color: rgb(225, 208, 123);
  border-radius: 50px;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  transform: scale(1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgba(52, 112, 255, 1);
    transform: scale(1.03);
    color: rgb(255, 255, 255);
  }
`;


  