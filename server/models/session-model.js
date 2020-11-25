const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Session = new Schema(
    {
        date: { type: String, required: true },
        goal: { type: String, required: true },
        substep: { type: String, required: true },
        completed: {type: Boolean, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('session', Session)