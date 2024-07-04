// src/components/CreatePoll.js
import React, { useState } from 'react';

function CreatePoll() {
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState(['']);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleOptionChange = (index, e) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };
  const addOption = () => setOptions([...options, '']);
  const removeOption = (index) => setOptions(options.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle poll creation logic here
  };

  return (
    <div className="container">
      <h1>Create a New Poll</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Options</label>
          {options.map((option, index) => (
            <div key={index}>
              <input type="text" value={option} onChange={(e) => handleOptionChange(index, e)} />
              {options.length > 1 && <button type="button" onClick={() => removeOption(index)}>Remove</button>}
            </div>
          ))}
          <button type="button" onClick={addOption}>Add Option</button>
        </div>
        <button type="submit">Create Poll</button>
      </form>
    </div>
  );
}

export default CreatePoll;