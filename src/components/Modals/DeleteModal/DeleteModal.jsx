import React from 'react';
import PropTypes from 'prop-types';
import CommonModal from '../CommonModal';
import Button from '../../Button';
import styles from './DeleteModal.module.css';

export default function DeleteModal(props) {
  const {isOpen, handleDeleteClick, closeModal, id} = props;
  return (
    <CommonModal
      isOpen={isOpen}
      handleCloseModal={closeModal}
      contentLabel="Confirm row deletion">
      <div className={styles.container}>
        <h2>Are you sure?</h2>
        <h4>You won&apos;t be able to revert this</h4>
        <div>
          <Button
            text="Delete"
            onClick={() => handleDeleteClick(id)}
            btnRole="danger"
          />
          <Button text="Cancel" onClick={closeModal} />
        </div>
      </div>
    </CommonModal>
  );
}

DeleteModal.propTypes = {
  isOpen: PropTypes.bool,
  handleDeleteClick: PropTypes.func,
  closeModal: PropTypes.func,
  id: PropTypes.string,
};

DeleteModal.defaultProps = {
  isOpen: false,
  handleDeleteClick: () => {},
  closeModal: () => {},
  id: '',
};
