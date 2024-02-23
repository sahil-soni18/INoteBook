import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailedNote = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const increseId = parseInt(id) + 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/editNote/${increseId}`);
        const data = await response.json();
        setTitle(data.title);
        setNote(data.note);
      } catch (error) {
        console.error('Fetching data failed in detailed notes:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNoteChange = (e) => {
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
    const response = await fetch(`http://localhost:3000/update/${increseId}`, {
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
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input 
              type="text" 
              className="form-control" 
              value={title} 
              onChange={handleTitleChange} 
            />
          </div>
          <div className="form-group">
            <label>Body</label>
            <textarea 
              className="form-control" 
              rows="15" 
              cols="100" 
              value={note} 
              onChange={handleNoteChange} 
              name='note'
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary m-4"
            style={{ width: "50%" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default DetailedNote;
