import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CommonModal from '../CommonModal';
import Button from '../../Button';
import SubmitRow from '../../SubmitRow';
import styles from './AddEditModal.module.css';

export default function AddEditModal(props) {
  const {id, type, isOpen, handleAddRow, closeModal, currentValues} = props;
  const handleEditRow = props.handleEditRow.bind(null, id);
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
  id: PropTypes.string,
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
  id: '',
  type: false,
  isOpen: false,
  handleAddRow: () => {},
  handleEditRow: () => {},
  closeModal: () => {},
  currentValues: false,
};
