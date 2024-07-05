// import React from 'react';
// import { Navbar, Form, Button, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <Navbar className="bg-dark justify-content-between w-full">
//       <Link to="/">
//         <span className="text-light">Text</span>
//       </Link>
//       <Form>
//         <Row>
//           <Col xs="auto">
//             <Link to="#">
//             <Button variant="light" style={{height: '40px'}}><img src='src\assets\icons8-moon-symbol-30.png' alt='Dark Theme Logo'/></Button>
//             </Link>
//           </Col>
//           <Col xs="auto">
//             <Link to="addNote">
//               <Button variant="primary">+</Button>
//             </Link>
//           </Col>
//         </Row>
//       </Form>
//     </Navbar>
//   );
// }

// export default Header;


import React from 'react';
import { Navbar, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <Navbar className="header-navbar w-100 d-flex justify-content-between">
      <Link to="/" className="header-link">
        Text
      </Link>
      <Form className="d-flex">
        <Row className="align-items-center">
          <Col xs="auto" className="px-1">
            <Link to="#">
              <Button variant="light" className="header-button">
                <img src="src/assets/icons8-moon-symbol-30.png" alt="Dark Theme Logo" />
              </Button>
            </Link>
          </Col>
          <Col xs="auto" className="px-1">
            <Link to="addNote">
              <Button variant="primary" className="header-button">+</Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default Header;
