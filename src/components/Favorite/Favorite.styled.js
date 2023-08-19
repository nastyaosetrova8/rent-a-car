import styled from 'styled-components';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

export const FavoriteTitleStyled = styled.h1`
  margin-top: 50px;
  font-family: 'Montserrat';
  font-size: 32px;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  color: rgba(52, 112, 255, 1);
`;

export const FavoriteEmptyText = styled.p`
  font-family: 'Montserrat';
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  color: rgba(11, 68, 205, 1);
`;

export const WrapperLinkStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const BsFillArrowLeftSquareFillStyled = styled(BsFillArrowLeftSquareFill)`
  margin-right: 8px;
  width: 18px;
  height: 18px;
  color: rgba(52, 112, 255, 1);
  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
  }
`;

export const FindStyled = styled.span`
  font-family: 'Montserrat';
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  color: rgba(52, 112, 255, 1);
  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
  }
`;

export const RemoveAllBtnStyled = styled.button`
  display: block;
  margin: 50px auto 150px;
  font-family: 'Manrope';
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  background-color: transparent;
  color: rgba(52, 112, 255, 1);
  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
  }
`;
