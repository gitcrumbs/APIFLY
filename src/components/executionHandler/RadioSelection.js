import { React } from 'react';

const RadioSelection = (name, type, value) => {
  return (
    <div>
      <input name={name} type={type} value={value} />
      <label>None</label>
    </div>
  );
};

export default RadioSelection;
