import FavoriteList from 'components/Favorite/Favorite';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/adverts/selectors';
import { selectIsShowModal } from 'redux/modal/modalSelectors';


export default function Favorite() {
  const isShowModal = useSelector(selectIsShowModal);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
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
      <FavoriteList />
      {isShowModal && <Modal />}
    </>
  );
}
