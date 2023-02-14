import { useEffect, useState } from 'react';

const DebugTerminal = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Parse the input as JSON
    let input;
    try {
      input = JSON.parse(inputValue);
    } catch (e) {
      setOutputValue('Invalid JSON input');
      return;
    }

    // Call the function with the parsed input
    let output;
    try {
      output = debugCommand(input);
    } catch (e) {
      setOutputValue('Error: ' + e.message);
      return;
    }

    // Stringify the output and display it
    let outputString;
    try {
      outputString = JSON.stringify(output);
    } catch (e) {
      setOutputValue('Invalid JSON output');
      return;
    }
    setOutputValue(outputString);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      {outputValue && <pre>{outputValue}</pre>}
    </div>
  );
};
export default DebugTerminal;
const debugCommand = (input) => {
  // This is the function that handles the debug command.
  // Modify it as needed to implement your debugging functionality.
  return input;
};
