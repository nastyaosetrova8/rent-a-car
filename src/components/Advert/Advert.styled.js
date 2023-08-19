import styled from 'styled-components';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';

export const AdvertStyled = styled.li`
  display: block;
  max-width: 274px;
  border-radius: 12px;
  font-family: 'Manrope', sans-serif;
  line-height: 1.5;
`;

export const ImgWrapper = styled.div`
  height: 268px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin-bottom: 14px;

  & img {
    height: 100%;
    object-fit: cover;
  }
`;

export const ToFavoriteBtnStyled = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
`;

export const BiHeartStyled = styled(BiHeart)`
  width: 18px;
  height: 18px;
  color: #ffffff;
`;

export const BiSolidHeartStyled = styled(BiSolidHeart)`
  width: 18px;
  height: 18px;
  color: rgba(52, 112, 255, 1);
`;

export const CardTitleWrapStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(18, 20, 23, 1);
`;

export const CarModelStyled = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;

export const ModelStyled = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const DetailsCarStyled = styled.ul`
  color: rgba(18, 20, 23, 0.5);
  margin-bottom: 28px;

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

export const CardBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 99px;
  width: 274px;
  color: #ffffff;
  background-color: rgba(52, 112, 255, 1);
  flex-shrink: 0;
  border-radius: 12px;
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
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
