import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ changeFieldSize, modes }) {
  const [size, setSize] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault(0);
    changeFieldSize(size);
  };

  return (
    <form>
      <select value={size} onChange={(event) => setSize(event.target.value)}>
        <option value="0" disabled>Choose mode</option>
        {modes.map((chosenMode) => (
          <option key={chosenMode.mode} value={chosenMode.fieldSize}>
            {chosenMode.mode}
          </option>
        ))}

      </select>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!size}
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
