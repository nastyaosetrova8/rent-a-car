import styled from 'styled-components';

export const ModalWrapStyled = styled.div`
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 400;
  color: rgba(18, 20, 23, 1);
`;

export const ImgWrapperStyled = styled.div`
  max-width: 461px;
  max-height: 248px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 14px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ModalTitleWrapStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  font-weight: 500;

  & span {
    color: rgba(52, 112, 255, 1);
  }
`;

export const DetailsModalCarStyled = styled.ul`
  margin-bottom: 14px;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);

  & li {
    display: inline-block;
    height: 16px;
    padding-right: 4px;

    &:not(:last-child) {
      border-right: 1px solid rgba(18, 20, 23, 0.1);
    }
    &:not(:first-child) {
      padding-left: 4px;
    }
  }
`;

export const DescStyled = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.4;
`;

export const ParTitleStyled = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;
`;

export const ListAccesorStyled = styled.div`
  margin-bottom: 24px;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const ConditionsStyled = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 8px;
  font-family: 'Montserrat';
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  font-weight: 400;

  & li {
    display: flex;
    padding: 7px 14px;
    border-radius: 35px;
    color: rgba(54, 53, 53, 1);
    background-color: rgba(249, 249, 249, 1);
  }

  & span {
    margin-left: 2px;
    font-weight: 600;
    color: rgba(52, 112, 255, 1);
  }
`;

export const LinkTelStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 50px;
  width: 168px;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(52, 112, 255, 1);
  border-radius: 12px;
  transform: scale(1);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transform: scale(1.03);
  }
`;
