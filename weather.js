const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeatherSchema = new Schema ({
       city: String,
       degree: String,
       weekdays: String,

})

module.exports = mongoose.model('Weather', WeatherSchema);