import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ changeFieldSize, modes }) {
  const [mode, setMode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    changeFieldSize(mode.fieldSize);
  };

  return (
    <form>
      <select value={mode} onChange={(event) => setMode(event.target.value)}>
        {modes.map((chosenMode) => (
          <option key={chosenMode.mode}>
            {chosenMode.mode}
          </option>
        ))}

      </select>
      <button
        type="submit"
        onClick={handleSubmit}
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
