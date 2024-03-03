import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const Notes = () => {
    const [data, setData] = useState([]);

    const deleteNote = async (noteID) => {
        try {
          // Make the DELETE request to the API endpoint
          const deleteResponse = await fetch(`http://localhost:3000/delete/${noteID}`, { method: 'DELETE' });
      
          if (deleteResponse.ok) {
            // Update local state only if the API call succeeds
            const newNotes = data.filter((note) => note.noteID !== noteID);
            setData(newNotes);
            alert("Note Deleted!");
          } else {
            // Handle errors here, e.g., display an error message or log the error
            const errorMessage = await deleteResponse.text();
            console.error("Error deleting note:", errorMessage);
            alert("There was an error deleting the note. Please try again.");
          }
        } catch (error) {
          // Handle unexpected errors
          console.error("Error:", error);
          alert("An unexpected error occurred. Please try again later.");
        }
      };
      

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Testing connection');
                const response = await fetch('http://localhost:3000');
                const apiData = await response.json();
                console.log('Data from the server:', apiData);
                setData(apiData);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []); 

  

    return (
        <>
            {data.length > 0 && data.map((note, index) => (
                <Card key={index} style={{ width: '18rem' }} className='m-3'>
                    <Card.Body>
                        <Card.Title>{note.title}</Card.Title>
                        <Card.Text>
                            {note.description}
                        </Card.Text>
                        <NavLink to={`/EditNote/${index}`}>Card Link {index}</NavLink>
                      <img src='src\assets\delete.png' width={'10%'} style={{position: 'relative', top: '6vh', left: '45%', cursor: 'pointer'}} onClick={()=> {deleteNote(index)}}/>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default Notes;
