import React, { Fragment, useState } from 'react';

import Project from './Project';

const ProjectsList = () => {
    // useState of component
    // const [ project, projectSave ] = useState({
    //     projectName: ''
    // }); 

    // const { projectName } = project;

    const projects = [
        { name: 'Projecto 1' },
        { name: 'Projecto 2' },
        { name: 'Projecto 3' },
        { name: 'Projecto 4' }
    ];

    return ( 
    <ul className="listado-proyectos"> 
        {projects.map((project, index) => <Project project={project} key={index} /> )}
    </ul>);
}
 
export default ProjectsList;