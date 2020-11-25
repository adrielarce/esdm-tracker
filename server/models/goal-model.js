const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Goal = new Schema(
    {
        name: { type: String, required: true },
        substep1: { type: String, required: false },
        substep2: { type: String, required: false },
        substep3: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('goal', Goal)