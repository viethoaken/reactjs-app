// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route, Link, NavLink, Navigate} from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';
// import ColoBox from './components/ColorBox';
// import Counter from './components/Counter';

function App() {

  return (
    <div className='App'>
      Header

      {/* <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Albums</Link></p>

      <p><NavLink to="/todos" activeClassName='active-menu'>Todos</NavLink></p>
      <p><NavLink to="/albums">Albums</NavLink></p> */}
      
      <Routes>
        {/* <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<Navigate to="/" />} /> */}
        <Route path='/' element = {<TodoFeature/>} exact />
        <Route path='/todos' element = {<TodoFeature/>} />
        <Route path='/albums' element = {<AlbumFeature/>} />

        <Route element = {<NotFound/>} />
      </Routes>
      
      Footer
    </div>
  );
}

export default App;
