import React from 'react';
import './toDoListStyles.css';


export default function ToDoList () {
    return (
        <div className="toDoWrapper">
            <div className='toDoTabButtons'>
                <button>Undone</button>
                <button>Completed</button>
                <button>All</button>
            </div>
        </div>
    );
};

