const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/', projectController.getAllProjects);

router.get('/:id', projectController.getOneProject);

router.post('/', projectController.createNewProject);

router.patch('/:id', projectController.updateOneProject);

router.delete('/:id', projectController.deleteOneProject);

module.exports = router;