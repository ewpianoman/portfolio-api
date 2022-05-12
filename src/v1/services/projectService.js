const Model = require("../models/projectModel");

const getAllProjects = () => {
    return Model.find();
};

const getOneProject = (req) => {
    return Model.findById(req.params.id);
};

const createNewProject = (req) => {
    return new Model({
        name: req.body.name,
        description: req.body.description,
        images: req.body.images,
        tags: req.body.tags
    });
};

const updateOneProject = (req) => {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = Model.findByIdAndUpdate(
        id, updatedData, options
    );

    return result;
};

const deleteOneProject = (req) => {
    const id = req.params.id;
    const data = Model.findByIdAndDelete(id);
    return data;
};

module.exports = {
    getAllProjects,
    getOneProject,
    createNewProject,
    updateOneProject,
    deleteOneProject
};