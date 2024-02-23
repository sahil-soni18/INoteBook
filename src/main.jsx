import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Notes from './components/Notes/Notes.jsx';
import DetailedNote from './components/DetailedNote/DetailedNote.jsx';
import AddNote from './components/AddNotes/AddNote.jsx';
import Layout from './Layout.jsx';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "EditNote/:id",  // Corrected path
        element: <DetailedNote />,
      },
      {
        path: "addNote",  // Corrected path
        element: <AddNote />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
);
