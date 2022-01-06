import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

function convertCamelCase(text) {
  const result = text.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function Form({ changeFieldSize, modes }) {
  const [size, setSize] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault(0);
    changeFieldSize(size);
  };

  return (
    <form className="form">
      <select
        value={size}
        onChange={(event) => setSize(event.target.value)}
        className="form__input"
      >
        <option value="0" disabled>Choose mode</option>
        {modes.map((chosenMode) => (
          <option key={chosenMode.mode} value={chosenMode.fieldSize}>
            {convertCamelCase(chosenMode.mode)}
          </option>
        ))}

      </select>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!size}
        className="form__button"
      >
        Start
      </button>
    </form>
  );
}

Form.propTypes = {
  changeFieldSize: PropTypes.func.isRequired,
  modes: PropTypes.arrayOf(
    PropTypes.shape({ fieldSize: PropTypes.number, mode: PropTypes.string }),
  ).isRequired,
};

export default Form;
