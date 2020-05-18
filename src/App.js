import React, { useState } from 'react';
import './App.css';
// do also declare module in declarations.d.ts
import IntlNumberInput from 'react-intl-number-input';

function App() {

  // Code from https://github.com/rasor/react-intl-number-input/blob/master/example/index.js
  const [value, setValue] = useState(12.34);
  const [maskedValue, setMaskedValue] = useState(0);

  function handleChange(event, value, maskedValue) {
    event.preventDefault();
    setValue(value);
    setMaskedValue(maskedValue);
  }

  return (
    <div>
    <h3>react-intl-number-input</h3>
    <p>
      <IntlNumberInput onChange={handleChange} />
    </p>
    <p>
      <IntlNumberInput
        precision={4}
        onChange={handleChange}
        value={value}
        disabled={true}
      />
    </p>
    <p>
      <IntlNumberInput
        prefix="$"
        onChange={handleChange}
      />
    </p>
    <p>
      <IntlNumberInput
        suffix="%"
        precision={0}
        onChange={handleChange}
      />
    </p>
    <p>
      <IntlNumberInput
        locale="pt-BR"
        prefix="R$ "
        precision={2}
        onChange={handleChange}
        value={value}
      />
    </p>
    <p>
      value: {value}
    </p>
    <p>
      maskedValue: {maskedValue}
    </p>
  </div>

  );
}

export default App;
