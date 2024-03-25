import React, { useState } from 'react';
import './style.css';
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [rangeValue, setRangeValue] = useState(0);
  const [generatedNames, setGeneratedNames] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRangeChange = (event) => {
    setRangeValue(parseInt(event.target.value));
  };

  const generateNames = () => {
    const namesList = inputValue.trim().split(',').map(name => name.trim());
    const shuffledNames = shuffleArray(namesList);
    const generated = shuffledNames.slice(0, rangeValue);
    setGeneratedNames(generated);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div>
      <h1>Generate Random List</h1>
      <div>
        <label htmlFor="namesInput">Enter List:</label>
        <input
          type="text"
          id="namesInput"
          value={inputValue}
          placeholder='Enter names separated by commas like: Asif, Alam, kamran, Afzal'
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="rangeInput">Select Range:</label>
        <input
          type="range"
          id="rangeInput"
          min={0}
          max={inputValue.trim().split(',').length}
          value={rangeValue}
          onChange={handleRangeChange}
        />
        <span>{rangeValue}</span>
      </div>
      <div>
        <button onClick={generateNames}>Generate</button>
      </div>
      <div>
        <h2>Generated Names:</h2>
        <ul>
          {generatedNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;