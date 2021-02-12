import React, { Fragment, useState } from 'react';

const NewProject = () => {
    // useState of component
    const [ project, projectSave ] = useState({
        projectName: ''
    }); 

    const { projectName } = project;

    // binding of elements
    const onChange = e => {
        projectSave({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    // submit function
    const onSubmit = e => {
        e.preventDefault();
        if(projectName !== ''){
            console.log('Todo OK');
        }
    }

    return ( 
    <Fragment> 
        <button type="button" className="btn btn-primario btn-block" >New Project</button>
        <form onSubmit={onSubmit} className="formulario-nuevo-proyecto" >
            <input className="input-text" type="text" name="projectName" placeholder="Project Name" onChange={onChange} value={projectName} />
            <input className="btn btn-primario btn-block" type="submit" value="Add project" />
        </form>
    </Fragment>);
}
 
export default NewProject;