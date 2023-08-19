import Advert from 'components/Advert/Advert';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts } from 'redux/adverts/selectors';
import { useEffect, useState } from 'react';
import { getAllAdvertsThunk } from 'redux/adverts/advertsThunks';
import { saveIdAdvert, toggleShowModal } from 'redux/modal/modalSlice';
import { toggleFavorite } from 'redux/favorites/favoriteSlice';
import { AdvertsListStyled, MoreBtnStyled } from './AdvertsList.styled';
import { StyledContainer } from 'Pages/Home/Home.styled';

const AdvertsList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(getAllAdvertsThunk(count));
  }, [dispatch, count]);

  const handleLoadMore = () => {
    setCount(count + 1);
  };

  const handleToggleFavorite = advert => {
    dispatch(toggleFavorite(advert));
  };

  const handleClickOpenModal = evt => {
    const currentAdvert = adverts.find(
      item => item.id === Number(evt.currentTarget.id)
    );
    dispatch(toggleShowModal());
    dispatch(saveIdAdvert(currentAdvert));
  };

  const showLoadMoreBtn = Math.ceil(adverts.length / 8) !== count;
  return (
    <StyledContainer>
      <AdvertsListStyled>
        {adverts.map(advert => {
          return (
            <Advert
              key={advert.id}
              {...advert}
              onToggleFavorite={() => handleToggleFavorite(advert)}
              onOpenModal={handleClickOpenModal}
            />
          );
        })}
      </AdvertsListStyled>

      {!showLoadMoreBtn && <MoreBtnStyled type="button" onClick={handleLoadMore}>Load more</MoreBtnStyled>}
    </StyledContainer>
  );
};


export default AdvertsList;
