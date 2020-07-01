import React from "react";
import Task from '../Components/Task';
import '../App.css'
import { Link } from "react-router-dom";

const Done = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    return (
        <div className="task-container">
            {tasks.done.map((task, index) => (
                <Task key={index} task={task} />
            ))}
        </div>
    );
};

export default Done;
