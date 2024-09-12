import { useState } from 'react';
import './App.css';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = () => setResult(Number(input1) + Number(input2));
  const handleSubtract = () => setResult(Number(input1) - Number(input2));
  const handleMultiply = () => setResult(Number(input1) * Number(input2));
  const handleDivide = () => setResult(Number(input1) / Number(input2));

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter a number"
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter another number"
      />
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
      </div>
      {result !== null && (
        <h2>Result: <strong>{result}</strong></h2>
      )}
    </div>
  );
}

export default App;
