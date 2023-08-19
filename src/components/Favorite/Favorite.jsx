import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts } from 'redux/adverts/selectors';
import { saveIdAdvert, toggleShowModal } from 'redux/modal/modalSlice';
import { Link } from 'react-router-dom';
import {
  removeAllFavoritesCars,
  toggleFavorite,
} from 'redux/favorites/favoriteSlice';
import Advert from 'components/Advert/Advert';
import { AdvertsListStyled } from 'components/AdvertsList/AdvertsList.styled';
import { BsFillArrowLeftSquareFillStyled, FavoriteEmptyText, FavoriteTitleStyled, FindStyled, RemoveAllBtnStyled, WrapperLinkStyled } from './Favorite.styled';
import { StyledContainer } from 'Pages/Home/Home.styled';

const FavoriteList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const favoriteList = useSelector(state => state.favorite);

  const handleToggleFavorite = advert => {
    dispatch(toggleFavorite(advert));
  };

  const handleRemoveAllFavorites = favoriteItem => {
    dispatch(removeAllFavoritesCars(favoriteItem));
  };

  const handleClickOpenModal = evt => {
    const currentAdvert = adverts.find(
      item => item.id === Number(evt.currentTarget.id)
    );
    dispatch(toggleShowModal());
    dispatch(saveIdAdvert(currentAdvert));
  };

  return (
    <StyledContainer>
      <FavoriteTitleStyled>Favorite Cars</FavoriteTitleStyled>
      {favoriteList.favoriteItems.length === 0 ? (
        <div>
          <FavoriteEmptyText>This page is empty</FavoriteEmptyText>
          <WrapperLinkStyled>
            <Link to="/catalog">
            <BsFillArrowLeftSquareFillStyled />
              <FindStyled>Find a car</FindStyled>
            </Link>
          </WrapperLinkStyled>
        </div>
      ) : (
        <div>
          <AdvertsListStyled>
            {favoriteList.favoriteItems?.map(favoriteItem => (
              <Advert
                key={favoriteItem.id}
                {...favoriteItem}
                onToggleFavorite={() => handleToggleFavorite(favoriteItem)}
                onOpenModal={handleClickOpenModal}
              />
            ))}
          </AdvertsListStyled>
          <div>
            <RemoveAllBtnStyled type="button" onClick={() => handleRemoveAllFavorites()}>
              Remove all
            </RemoveAllBtnStyled>
          </div>
        </div>
      )}
    </StyledContainer>
  );
};

export default FavoriteList;

