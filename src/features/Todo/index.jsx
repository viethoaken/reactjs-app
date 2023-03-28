import React from 'react';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import {Routes, Route, useRouteMatch} from 'react-router-dom';

TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match = useRouteMatch()
 
    return (
        <div>
          <Routes>
            <Route path={match.path} element = {<ListPage/>} exact />
            <Route path={`${match.path}/:todoID`} element = {<DetailPage/>} />
          </Routes>
        </div>
    )
}    

export default TodoFeature;
