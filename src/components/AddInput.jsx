import React from 'react';
import PropTypes from 'prop-types';

class AddInput extends React.Component {
  render() {
    const { label, value, id, callback } = this.props;
    return (
      <label data-testid={`${id}-input-label`} htmlFor={id}>{label}
        <input type="text" id={id} value={value} data-testid={`${id}-input`} onChange={callback} />
      </label>
    );
  }
}

AddInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default AddInput;
