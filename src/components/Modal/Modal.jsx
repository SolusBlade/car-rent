import s from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, handleCloseModal }) => {
  
  const closeModalByEscape = useCallback(
    e => {
      if (e.code === 'Escape') {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  const closeModalOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalByEscape);

    return () => {
      window.removeEventListener('keydown', closeModalByEscape);
    };
  }, [closeModalByEscape]);

  return createPortal(
    <>
      <div className={s.backdrop} onClick={closeModalOnBackdrop}>
        {children}
      </div>
    </>,
    modalRoot
  );
};

export default Modal;