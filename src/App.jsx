import React, { useEffect, useState } from 'react';

import getModes from './api/modes';
import Form from './components/Form/Form';

import './App.css';

function App() {
  const [fieldSize, setFieldSize] = useState(0);
  const [modes, setModes] = useState([]);

  const fetchModes = async () => {
    const modesFromServer = await getModes();

    setModes(modesFromServer);
  };

  useEffect(() => {
    fetchModes();
  }, []);

  const changeFieldSize = (size) => {
    setFieldSize(size);
  };

  return (
    <div className="App">
      <h1>StarNavi Test Task</h1>
      <Form
        changeFieldSize={changeFieldSize}
        modes={modes}
      />
      <p>{fieldSize}</p>
      {/* <Field /> */}
    </div>
  );
}

export default App;
