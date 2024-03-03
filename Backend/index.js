import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const client = new pg.Client({
    "host": "localhost",
    "user": "postgres",
    "database": "React_Note_App",
    "password": "myPostgres",
    "port": 5432
});

client.connect();

app.get('/', async (req, res) => {
    try {
        console.log(`Connect`);
        const result = await client.query(`SELECT title, description FROM notes`);
        const data = result.rows;
        console.log(data[0]);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/addNote', async (req, res) => {
    try {
        console.log(`req.body.title: ${req.body.title}`);
        console.log(`req.body.description: ${req.body.description}`);
        const noteID = req.body.noteID;
        const title = req.body.title;
        const description = req.body.description;
        console.log(`note = ${description}`);
        await client.query(`INSERT INTO notes (noteID, title, description) VALUES ($1, $2, $3)`, [noteID, title, description]);
        res.status(201).send('Note added successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    // res.send('Note added successfully');
    // res.redirect('/');
});

app.post('/update/:id', async (req, res) => {
    const id = req.params.id;
    try {
        console.log(`req.body.title: ${req.body.title}`);
        console.log(`req.body.description: ${req.body.description}`);
        const title = req.body.title;
        const description = req.body.description;
        console.log(description);
        await client.query(`UPDATE notes SET title=$1, description=$2 WHERE noteID=$3`, [title, description, id]);
        res.status(201).send('Note UPDATED successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    // res.send('Note added successfully');
    // res.redirect('/');
});

app.get('/editNote/:noteId', async (req, res) => {
    const id = req.params.noteId;
    console.log(id);
    try {
        const result = await client.query(`SELECT * FROM notes WHERE noteId = $1`, [id]);
        console.log(`result.rows[0] = ${result.rows}`);
        res.send(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.delete('/delete/:noteId', async (req, res) => {
    const id = req.params.noteId;
    console.log(`id = ${id}`);
    try {
        await client.query(`DELETE FROM notes WHERE noteID = $1`, [id]);
        res.status(201).send('Note DELETED successfully');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
