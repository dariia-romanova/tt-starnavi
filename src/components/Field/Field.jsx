import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './Field.scss';

function Field({ size }) {
  const [field, setField] = useState([]);

  const createField = () => {
    const newField = [];

    for (let i = 0; i < size; i += 1) {
      const row = [];

      for (let j = 0; j < size; j += 1) {
        row.push({ col: j, row: i, hover: false });
      }

      newField.push(row);
    }

    setField(newField);
  };

  useEffect(() => {
    createField();
  }, [size]);

  return (
    <section className="field">
      {field.map((row) => (
        <div className="field__row">
          {row.map((cell) => (
            <div className="field__cell" key={`${cell.row}-${cell.col}`} />
          ))}
        </div>
      ))}
    </section>
  );
}

Field.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Field;
