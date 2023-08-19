import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import {
  selectAdverts,
  selectError,
  selectIsLoading,
} from 'redux/adverts/selectors';
import { PagesStyled } from './Home/Home.styled';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import { selectIsShowModal } from 'redux/modal/modalSelectors';
import Modal from 'components/Modal/Modal';


export default function Catalog() {
  const adverts = useSelector(selectAdverts);
  const isShowModal = useSelector(selectIsShowModal);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <PagesStyled>
      {error && (
        <div>
          <p>Opps, some error occured... Error: {error}</p>
        </div>
      )}
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}

      {adverts &&  <AdvertsList />} 

      {isShowModal && <Modal />}
    </PagesStyled>
  );
}
