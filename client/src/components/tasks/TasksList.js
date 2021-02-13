import React, { Fragment} from 'react';

import Task from './Task';

const TasksList = () => {

    const tasks = [
        {name: 'Tarea 1', state: true},
        {name: 'Tarea 2', state: false},
        {name: 'Tarea 3', state: false},
        {name: 'Tarea 4', state: true},
        {name: 'Tarea 5', state: true},
    ]

    return ( 
        <Fragment>
            <h2>Project: Tienda Virtual</h2>
            <ul className="listado-tareas">
                {tasks.length === 0
                    ? (<li className="tarea"> <p>Empty</p> </li>)
                    : tasks.map(task => (
                        <Task task={task} />
                    ))
                }
            </ul>
            <button type="button" className="btn btn-primario" >Project Delete &times;</button>
        </Fragment>
    );
}
 
export default TasksList;