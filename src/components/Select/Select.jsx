import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const customStyles = {
  control: provided => ({
    ...provided,
    borderRadius: 0,
    height: '100%',
  }),
};

export default function SelectComponent({options, onChange}) {
  return (
    <Select
      styles={customStyles}
      defaultValue={options[1]}
      options={options}
      onChange={selected => onChange(selected.value)}
    />
  );
}

SelectComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  onChange: PropTypes.func,
};

SelectComponent.defaultProps = {
  options: [
    {value: 2, label: 2},
    {value: 4, label: 4},
    {value: 6, label: 6},
  ],
  onChange: () => {},
};
