import React from 'react';
import './toDoListStyles.css';


export default function ToDoList () {
    return (
        <div className="toDoWrapper">
            <div className='toDoTabButtons'>
                <button>All</button>
                <button>Undone</button>
                <button>Completed</button>
            </div>
            <div className='toDoTaskList'>
                <ul className='strike'>lorem ipsum</ul>
                <ul>lorem ipsum</ul>
                <ul>lorem ipsum</ul>
                <ul>lorem ipsum</ul>
            </div>
        </div>
    );
};

