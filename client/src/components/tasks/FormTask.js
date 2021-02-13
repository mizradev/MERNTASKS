import React, {useState} from 'react';

const FormTask = () => {

    const [ task, addTask ] = useState({
        taskName: ''
    })

    const { taskName } = task;

    const onChange = e => {
        addTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        if(taskName !== '') {
            alert('TODO OK');
        }
    }


    return ( 
        <div className="formulario">
            <form onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input type="text" className="input-text" placeholder="Task Name" 
                        name="taskName" 
                        value={taskName}
                        onChange={onChange} />
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-submit btn-block" value="Add task" />
                </div>
            </form>
        </div>
    );
}
 
export default FormTask;