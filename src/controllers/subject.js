const Subject = require("../models/subject");

const listSubjects = (req, res) => {
  Subject.find()
    .then((subjects) => res.status(200).json(subjects))
    .catch((err) => {
      res.status(404).json({ message: "No subjects found" });
      console.log(err);
    });
};

const addSubject = (req, res) => {
  const newSubject = new Subject(req.body);

  newSubject
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error creando la asignatura" });
      console.log(err);
    });
};

const updateSubject = (req, res) => {
  const subjectData = req.body;

  const params = req.params;

  Subject.findByIdAndUpdate(
    { _id: params.id },
    subjectData,
    (err, userUpdate) => {
      err
        ? res.status(500).send({ message: "Error del servidor." })
        : !userUpdate
        ? res.status(404).send({ message: "No se encontro la asignatura." })
        : res
            .status(200)
            .send({ message: "Asignatura actualizada correctamente." });
    }
  );
};

const deleteSubject = (req, res) => {
  const { id } = req.params;

  Subject.findByIdAndRemove(id, (err, userDeleted) => {
    err
      ? res.status(500).send({ message: "Error del servidor." })
      : !userDeleted
      ? res.status(404).send({ message: "Usuario no encontrado." })
      : res
          .status(200)
          .send({ message: "La asignatura ha sido eliminada correctamente." });
  });
};

module.exports = {
  listSubjects,
  addSubject,
  updateSubject,
  deleteSubject,
};
