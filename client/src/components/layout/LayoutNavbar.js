import React, { Component } from "react";
import { Link } from "react-router-dom";

import hceuicono from './LogoApp.svg';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class LayoutNavbar extends Component {
  render() {
    return (
      <Container>
            <Navbar bg="light" expand = "lg">
              <Navbar.Brand href="#home">
                  <img src={hceuicono} height="35px" id="hceuicono" className="d-inline-block align-top" alt={"Tenkuru icono"} />
                {' Historias clínicas electrónicas uníficadas'}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Text>GitHub: <a href = "https://alfa-omega-software.github.io/HCEU/"> HCEU </a></Navbar.Text>
                <Nav.Link href ="/">Inicio</Nav.Link>
                <Nav.Link href ="/">Ayuda</Nav.Link>
                <Nav.Link href ="/">Contacto</Nav.Link>
                <Form inline>
                  <Form.Control type="text" placeholder="Buscar" className="mr-sm-2" />
                  <Button variant="primary">Buscar</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
      </Container>

    );
  }
}
export default LayoutNavbar;

/*<div className="navbar-fixed">
  <nav className="z-depth-0">
    <div className="nav-wrapper white">
      <Link
        to="/"
        style={{
          fontFamily: "monospace"
        }}
        className="col s5 brand-logo center black-text"
      >
        <i className="material-icons">code</i>
        MERN
      </Link>
    </div>
  </nav>
</div>*/