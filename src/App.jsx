import React, { useEffect, useState } from 'react';

import getModes from './api/modes';
import Form from './components/Form/Form';
import Field from './components/Field/Field';

import './App.css';

function App() {
  const [fieldSize, setFieldSize] = useState(0);
  const [modes, setModes] = useState([]);
  const [isErrror, setError] = useState(false);

  const fetchModes = async () => {
    try {
      const modesFromServer = await getModes();

      setModes(modesFromServer);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchModes();
  }, []);

  const changeFieldSize = (size) => {
    setFieldSize(Number(size));
  };

  const resetField = () => {
    setFieldSize(0);
  };

  return (
    <div className="App">
      {!isErrror ? (
        <>
          <Form
            changeFieldSize={changeFieldSize}
            resetField={resetField}
            modes={modes}
          />
          <Field size={fieldSize} />
        </>
      ) : (
        <p>Failed to load modes</p>
      )}
    </div>
  );
}

export default App;
