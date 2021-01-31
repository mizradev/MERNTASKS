const Project = require('./ProjectModel');

exports.createProject = async (req, res) => {
    try{
        // creaate project
        const project = new Project(req.body);
        // user id
        project.owner = req.user.id;
        // save project
        project.save();
        //response
        res.status(200).json({msg: 'There was an error registering a project', error: false});

    }catch(error){
        console.log(error);
        res.status(400).json({msg: 'There was an error registering a project', error: true, errorBody: error})
    }
}