import styled from 'styled-components';

export const AdvertsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  row-gap: 50px;
  column-gap: 29px;
`;

export const MoreBtnStyled = styled.button`
display: block;
  margin: 100px auto 150px;
  font-family: 'Manrope';
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  background-color: transparent;
  color: rgba(52, 112, 255, 1);
  text-decoration: underline;
  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
  }
`;
