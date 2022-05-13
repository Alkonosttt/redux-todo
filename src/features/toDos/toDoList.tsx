import React, { useState, useEffect } from 'react';
import './toDoListStyles.css';


export default function ToDoList () {
    const [toDo, setToDo] = useState("");
    const handleChange = (e) => {
        setToDo(e.target.value);
    };
    return (
        <div className="toDoWrapper">
            <h1>ToDo List</h1>
            <div className='addToDoWrapper'>
                <input className='addToDoTextField' type="text" value={toDo}  onChange={(e) => handleChange(e)}/>
                <button className='addToDoButton'>ADD</button>
            </div>
            <div className='toDoTabButtons'>
                <button>All</button>
                <button>Pending</button>
                <button>Completed</button>
            </div>
            <div className='toDoTaskList'>
                <ul>lorem ipsum 1</ul>
                <ul>lorem ipsum 2</ul>
                <ul>lorem ipsum 3</ul>
                <ul>lorem ipsum 4</ul>
            </div>
        </div>
    );
};

