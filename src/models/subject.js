const mongoose = require("mongoose");
const SubjectSchema = mongoose.Schema({
  department: { type: String, require: true },
  academic_activity: { type: String, require: true },
  activity_code: { type: String, require: true },
  number_credits: { type: Number, require: true },
  piaa_version: { type: Number, require: true },
  theory_hours: { type: Number, require: true },
  offsite_hours: { type: Number, require: true },
  hoursnon_attendance_reprovals: { type: Number, require: true },
  last_chance: { type: Boolean, require: true },
  duration_semester: { type: Number, require: true },
  practical_hours: { type: Number, require: true },
  presential_teacher_hours: { type: Number, require: true },
  passing_score: { type: Number, require: true },
});

module.exports = mongoose.model("subject", SubjectSchema);
