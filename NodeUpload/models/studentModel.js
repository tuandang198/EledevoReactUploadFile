const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	image:{
		type: Array
	}
})

const model = new mongoose.model('Student',studentSchema)

module.exports = model