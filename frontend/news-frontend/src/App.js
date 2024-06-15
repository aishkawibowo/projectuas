import React from 'react';
import ItemList from './ItemList';
import ItemBerita from './ItemBerita';
import ItemLayanan from './ItemLayanan';
import ItemProfil from './ItemProfil';
import './App.css';
import logo from './assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CarouselComponent from './CarouselComponent'; // Import CarouselComponent

const App = () => {
  return (
    <Router>
      <>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/" className="d-flex align-items-center">
              <img
                alt="Logo"
                src={logo}
                width="100"
                height="50"
                className="d-inline-block align-top"
              />
              <span className="ms-2">Berita Terkini di Indonesia  -09020622018-</span>
            </Navbar.Brand>
            <NavDropdown title="Jenis Berita" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/jenisberita">Berita</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jenislayanan">Layanan</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jenisprofil">Profil</NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>
        <div className="ItemListContainer">
          <Routes>
            <Route path="/jenisberita" element={<ItemBerita />} />
            <Route path="/jenislayanan" element={<ItemLayanan />} />
            <Route path="/jenisprofil" element={<ItemProfil />} />
            <Route path="/" element={
              <>
                <CarouselComponent /> {/* Add CarouselComponent here */}
                <ItemList />
              </>
            } />
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;
