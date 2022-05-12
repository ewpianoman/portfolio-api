const projectService = require('../services/projectService');

const getAllProjects = async (req, res) => {
    try {
        const allProjects = await projectService.getAllProjects();
        res.json(allProjects);
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
};

const getOneProject = async(req, res) => {
    try {
        const project = await projectService.getOneProject(req);
        res.json(project);
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
};

const createNewProject = async (req, res) => {
    console.log(req.body);

    const createdProject = projectService.createNewProject(req);

    try {
        const dataToSave = await createdProject.save();
        res.status(200).json(dataToSave);
    }
    catch (err) {
        res.status(400).json({message: err.message});
    }
};

const updateOneProject = async (req, res) => {
    try {
        const updatedProject = await projectService.updateOneProject(req);
        res.send(updatedProject);
    }
    catch(err) {
        res.status(400).json({message: err.message});
    }
};

const deleteOneProject = async (req, res) => {
    try {
        const deletedProject = await projectService.deleteOneProject(req);
        res.send(`The Document with the name ${deletedProject.name} and id ${deletedProject._id} has been deleted...`);
    }
    catch(err) {
        res.status(400).json({message: err.message});
    }
};

module.exports = {
    getAllProjects,
    getOneProject,
    createNewProject,
    updateOneProject,
    deleteOneProject
};