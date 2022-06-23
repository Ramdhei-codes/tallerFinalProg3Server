const express = require("express");
const api = express.Router();

const SubjectController = require("../controllers/subject");

api.get("/subjects", SubjectController.listSubjects);
api.post("/subject", SubjectController.addSubject);
api.put("/subject/:id", SubjectController.updateSubject);
api.delete("/subject/:id", SubjectController.deleteSubject);

module.exports = api;
