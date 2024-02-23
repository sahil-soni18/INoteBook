import React, { useState } from 'react';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setNote(e.target.value);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Construct the data object to send to the server
  const data = {
    title: title,
    note: note
  };

  try {
    // Make a POST request to the server
    console.log(`titles: ${title}, body: ${note}`);
    const response = await fetch('http://localhost:3000/addNote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    // Check if the request was successful
    if (response.ok) {
      // Reset the form after successful submission
      setTitle('');
      setNote('');
      alert('Note added successfully!');
    } else {
      // Handle error response from the server
      const errorMessage = await response.text();
      alert(`Error: ${errorMessage}`);
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('Error:', error);
    alert('An error occurred while submitting the note. Please try again later.');
  }
};


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={handleTitleChange}
            name="title" // Add name attribute
          />
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea
            className="form-control"
            rows="15"
            cols="100"
            value={note}
            onChange={handleBodyChange}
            name="note" // Add name attribute
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary m-4" style={{ width: "50%" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
