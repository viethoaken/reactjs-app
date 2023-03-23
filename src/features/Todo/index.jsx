import React from 'react';
// import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Learn',
            status: 'new',
        },
        {
            id: 2,
            title: 'Worrk',
            status: 'completed',
        },
        {
            id: 1,
            title: 'Relax',
            status: 'new',
        },
    ]

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default TodoFeature;