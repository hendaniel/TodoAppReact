import React from "react";
import Task from '../Components/Task';

const Done = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    return (
        <div>
            <div className="task-container">
                {tasks.todo.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </div>
            <button>
                Agregar tarea
            </button>
        </div>
    );
};

export default Done;
