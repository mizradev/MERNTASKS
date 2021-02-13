import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState = props => {
    const initialState ={
        form: false
    }

    //dispatch of actions
    const [ state, dispatch ] = useReducer(projectReducer, initialState); 

    // function for project

    return (
        <projectContext.Provider
            value={{ form: state.form }}
        >
            {props.children}
        </projectContext.Provider>
    );
}

export default ProjectState;