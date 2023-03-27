// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
// import ColoBox from './components/ColorBox';
// import Counter from './components/Counter';

function App() {

  return (
    <div className='App'>
      Home page
      <Routes>
        < Route path='/todos' element = {<TodoFeature/>} />
        < Route path='/albums' element = {<AlbumFeature/>} />
      </Routes>
      
    </div>
  );
}

export default App;
