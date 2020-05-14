import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CommonModal from '../CommonModal';
import Button from '../../Button';
import SubmitRow from '../../SubmitRow';
import styles from './AddEditModal.module.css';

export default function AddEditModal(props) {
  const {
    type,
    isOpen,
    handleAddRow,
    handleEditRow,
    closeModal,
    currentValues,
  } = props;
  const title = type === 'add' ? 'Add new entry' : 'Edit entry';
  const [disabled, setDisabled] = useState(true);

  return (
    <CommonModal
      isOpen={isOpen}
      handleCloseModal={closeModal}
      contentLabel={title}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <SubmitRow
          onSubmit={type === 'add' ? handleAddRow : handleEditRow}
          currentValues={currentValues}
          setDisabled={setDisabled}>
          <Button
            disabled={disabled}
            type="submit"
            btnRole="submit"
            text="Ok"
          />
          <Button text="Cancel" onClick={closeModal} />
        </SubmitRow>
      </div>
    </CommonModal>
  );
}

AddEditModal.propTypes = {
  type: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isOpen: PropTypes.bool,
  handleAddRow: PropTypes.func,
  handleEditRow: PropTypes.func,
  closeModal: PropTypes.func,
  currentValues: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.objectOf(PropTypes.string),
  ]),
};

AddEditModal.defaultProps = {
  type: false,
  isOpen: false,
  handleAddRow: () => {},
  handleEditRow: () => {},
  closeModal: () => {},
  currentValues: false,
};
