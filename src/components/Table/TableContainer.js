import {connect} from 'react-redux';
import {
  openDeleteModal,
  openEditModal,
  openNewEntryModal,
} from 'features/openedModals';
import {setRowId} from 'features/rowId';
import {sortEntries} from 'features/tableData';
import Table from './Table';

const mapStateToProps = (state, ownProps) => ({
  ...state.tableData,
  ...state.openedModals,
  ...state.pagination,
  openedModals: state.openedModals,
  rowId: state.rowId,
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  openNewEntryModal: () => dispatch(openNewEntryModal()),
  openEditModal: id => {
    dispatch(setRowId(id));
    dispatch(openEditModal(id));
  },
  openDeleteModal: id => {
    dispatch(setRowId(id));
    dispatch(openDeleteModal());
  },
  handleSort: fieldName => dispatch(sortEntries(fieldName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
