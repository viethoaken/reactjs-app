import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {
    
};

function ListPage(props) {
    const initTodoList = [
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

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo, idx) =>{
        // clone current array to the new array
        const newTodoList = [...todoList];

        console.log(todo, idx);
        // toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }
        // newTodoList[idx] = newTodo

        // update toto List, set new todo list
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all')
    }
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed')
    }
    const handleShowNewClick = () => {
        setFilteredStatus('new')
    }

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)
    // console.log(renderedTodoList)

    return (
        <div>
            <h3>Todo List</h3>
            {/* reder 1 list, notify to parent when have click in list */}
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} /> 

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;