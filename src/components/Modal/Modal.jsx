import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsShowModal } from 'redux/modal/modalSelectors';
import { toggleShowModal } from 'redux/modal/modalSlice';
import { BtnCloseStyled, StyledModal, StyledOverlay } from './Modal.styled';
import { AiOutlineClose } from 'react-icons/ai';
import { AdvertModal } from './AdvertModal';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  const dispatch = useDispatch();
  const isShowModal = useSelector(selectIsShowModal);

  useEffect(() => {
    if (!isShowModal) return;
    document.body.classList.add('no-scroll');

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        document.body.classList.remove('no-scroll');
        dispatch(toggleShowModal(''));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, isShowModal]);

  const handleClickOverlay = e => {
    if (e.target === e.currentTarget) {
      document.body.classList.remove('no-scroll');
      dispatch(toggleShowModal(''));
    }
  };

  const handleClickBtnClose = () => {
    document.body.classList.remove('no-scroll');
    dispatch(toggleShowModal(''));
  };

  return createPortal(
    <StyledOverlay onClick={handleClickOverlay}>
      <StyledModal>
        {isShowModal && (
          <BtnCloseStyled type="button" onClick={handleClickBtnClose}>
            <AiOutlineClose size={16} fill="#121417" />
          </BtnCloseStyled>
        )}
        {isShowModal && <AdvertModal />}
      </StyledModal>
    </StyledOverlay>,
    modalRoot
  );
}
