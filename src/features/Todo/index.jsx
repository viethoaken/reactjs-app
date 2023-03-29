import React from 'react';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import {Routes, Route, useMatch} from 'react-router-dom';
import NotFound from '../../components/NotFound';


TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match = useMatch()
 
    return (
        <div>
          <Routes>
            <Route path={match.path} element = {<ListPage/>} exact />
            <Route path={`${match.path}/:todoID`} element = {<DetailPage/>} />

            <Route element = {<NotFound/>} />
          </Routes>
        </div>
    )
}    

export default TodoFeature;
