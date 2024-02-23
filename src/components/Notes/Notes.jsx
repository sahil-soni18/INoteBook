import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const Notes = () => {
    // State to store the fetched data
    const [data, setData] = useState([]);

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
    }, []); // Empty dependency array

  

    return (
        <>
            {data.length > 0 && data.map((note, index) => (
                <Card key={index} style={{ width: '18rem' }} className='m-3'>
                    <Card.Body>
                        <Card.Title>{note.title}</Card.Title>
                        <Card.Text>
                            {note.note}
                        </Card.Text>
                        <NavLink to={`/EditNote/${index}`}>Card Link {index}</NavLink>
                      {/* <img src='src\assets\delete.png' width={'10%'} style={{position: 'relative', top: '6vh', left: '45%', cursor: 'pointer'}} onClick={deleteNote}/> */}
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default Notes;
