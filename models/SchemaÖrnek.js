const mongoose = require('mongoose');


const ÖrnekSchema = new mongoose.Schema({
    sunucuID: String,
    kullanıcıID: String,
})

module.exports = mongoose.model('ornek_data', ÖrnekSchema)
