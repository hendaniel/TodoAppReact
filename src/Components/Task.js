import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Task = ({ task }) => {

    return (
        <div className="task">
            <div className="title"><strong>{task.name}</strong></div>
            <div className="description">{task.description}</div>
            <div>
                <FontAwesomeIcon icon="check-square" />
            </div>
            <button>Hecha</button>
            <button>Realizando</button>
            <button>Nueva</button>
        </div >
    );

}

export default Task;