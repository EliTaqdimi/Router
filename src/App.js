import { BrowserRouter , Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Articles from './pages/article';



function App() {
  const [loggedIn]=useState(true)
  return (
  <div className="App">
        <BrowserRouter>
        <Navbar className='Navbar'>
        <Container className='container'>
          <Navbar.Brand to="/" >React Router</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Container>
      </Navbar> 
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about/*' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Articles/:id' element={<Articles/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>

        <Route path='/mahdi' element={loggedIn ? <p>Hello Mahdi</p>: <Navigate to='/'/>}
        />
 
      {/* create jsx  */}
       <Route path='/test' element={(
          <div>
            <h1>Test</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi libero impedit, tempore quaerat atque modi a eaque odio. Suscipit reprehenderit adipisci voluptatibus tempora quis molestiae vitae blanditiis velit repudiandae.</p>
          </div>)}/>
        </Routes>
        </BrowserRouter>
       
  </div>
  );
}

export default App;
