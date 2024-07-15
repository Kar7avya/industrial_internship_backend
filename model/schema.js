const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
    "name": { type: String },
    "description": { type: String },
    "appointmentsAvailable": { type: Number },
    "appointmentDate": { type: Date } 
}, {
    collection: "patients"
});

module.exports = mongoose.model("appointment-schema", appointmentSchema);