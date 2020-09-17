import React from 'react';
import PropTypes from 'prop-types';

class AddInput extends React.Component {
  render() {
    const { label, value, id, inputType, callback } = this.props;
    return (
      <label data-testid={`${testid}-label`} htmlFor={id}>{label}
        <input type={inputType} id={id} value={value} data-testid={`${id}-input`} onChange={callback} />
      </label>
    );
  }
}

AddInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default AddInput;
