const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://adriel:Arce1991!@cluster0.kravc.mongodb.net/esdm-therapy-tracker-db?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
console.log(db);
module.exports = db