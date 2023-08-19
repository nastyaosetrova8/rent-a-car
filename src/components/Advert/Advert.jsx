import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from 'utils/functions';
import {
  AdvertStyled,
  BiHeartStyled,
  BiSolidHeartStyled,
  CarModelStyled,
  CardBtnStyled,
  CardTitleWrapStyled,
  DetailsCarStyled,
  ImgWrapper,
  ModelStyled,
  ToFavoriteBtnStyled,
} from './Advert.styled';
import { useSelector } from 'react-redux';
import { selectFavoriteItems } from 'redux/favorites/favoriteSelectors';

const Advert = ({
  id,
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  accessories,
  onOpenModal,
  onToggleFavorite,
}) => {
  const isFavorite = useSelector(selectFavoriteItems);

  return (
    <AdvertStyled key={id}>
      <ImgWrapper>
        <img src={img} alt={make} />
        <ToFavoriteBtnStyled onClick={onToggleFavorite}>
          {isFavorite.some(item => item.id === id) ? (
            <BiSolidHeartStyled />
          ) : (
            <BiHeartStyled />
          )}
        </ToFavoriteBtnStyled>
      </ImgWrapper>

      <CardTitleWrapStyled>
        <CarModelStyled>
          {make} 
          <ModelStyled> {model.split(' ').slice(0, 2)}</ModelStyled>, {year}
        </CarModelStyled>
        <p>{rentalPrice}</p>
      </CardTitleWrapStyled>

      <DetailsCarStyled>
        <li>{address.split(', ').slice(1, 2)} </li>
        <li>{address.split(', ').pop()} </li>
        <li>{rentalCompany} </li>
        <li>{capitalizeFirstLetter(type)} </li>
        <li>{model} </li>
        <li>{id} </li>
        <li>{accessories[0].split(' ').slice(0, 2).join(' ')}</li>
      </DetailsCarStyled>

      <CardBtnStyled type="button" id={id} onClick={onOpenModal}>
        Learn more
      </CardBtnStyled>
    </AdvertStyled>
  );
};

Advert.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rentalCompany: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  accessories: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default Advert;
