import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

  const handleMouseOver = (row, col) => {
    const newField = [...field];
    newField[row][col].hover = !newField[row][col].hover;
    setField(newField);
  };

  useEffect(() => {
    createField();
  }, [size]);

  return (
    <div>
      <section className="field">
        {field.map((row) => (
          <div className="field__row" key={row[0].row}>
            {row.map((cell) => (
              <div
                className={classNames('field__cell', { 'field__cell--hover': cell.hover })}
                key={`${cell.row}-${cell.col}`}
                onFocus={() => {
                  handleMouseOver(cell.row, cell.col);
                }}
                onMouseOver={() => {
                  handleMouseOver(cell.row, cell.col);
                }}
              />
            ))}
          </div>
        ))}
      </section>

      <section>
        <h2>Hover squares</h2>
        <ul>
          {field.map((row) => (
            row.map((cell) => (
              cell.hover && <li key={`${cell.row}-${cell.col}`}>{`row ${cell.row + 1} col ${cell.col + 1}`}</li>
            ))
          ))}
        </ul>
      </section>
    </div>
  );
}

Field.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Field;
