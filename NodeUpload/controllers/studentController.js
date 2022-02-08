const model = require('../models/studentModel')
const fs = require('fs')
exports.getStudent = async (req, res, next) => {
	try {
		const getStudent = await model.find()
		res.send({ studentData: getStudent })
	} catch (error) {
		res.send(404, error)
	}
}

exports.addStudent = async (req, res, next) => {
	try {
		const file = req.files
		const arrImage = []
		for (let i = 0; i < file.length; i++) {
			const url = `http://localhost:3004/${file[i].filename}`
			arrImage.push(url)
		}
		const addStudent = await model.create({ image: arrImage })
		res.send({ studentData: addStudent })
	} catch (error) {
		res.send(404, error)
	}
}

exports.deleteStudent = async (req, res, next) => {
	try {
		const studentId = req.params.id
		const deleteStudent = await model.findByIdAndDelete(studentId)
		const oldImageUrl = deleteStudent.image
		for (let i = 0; i < oldImageUrl.length; i++) {
			fs.unlink(`img/${oldImageUrl[i].slice(22)}`, () => { })
		}
		res.send({ studentData: deleteStudent, studentId })

	} catch (error) {
		res.send(404, error)
	}
}

exports.deleteOneStudent = async (req, res, next) => {
	try {
		const studentId = req.query.id
		const index = req.query.index
		const findStudent = await model.findById(studentId)
		const oldImageUrl = findStudent.image
		fs.unlink(`img/${oldImageUrl[index].slice(22)}`, () => { }) 
		oldImageUrl.splice(index, 1)
		const updateStudent = await model.findByIdAndUpdate(studentId, {image:oldImageUrl})
		console.log(updateStudent,);
		res.send({ studentData: updateStudent, studentId })

	} catch (error) {
		res.send(404, error)
	}
}
exports.updateStudent = async (req, res, next) => {
	try {
		const file = req.files
		const studentId = req.params.id
		const arrImage = []
		for (let i = 0; i < file.length; i++) {
			const url = `http://localhost:3004/${file[i].filename}`
			arrImage.push(url)
		}
		const updateStudent = await model.findByIdAndUpdate(studentId, { image: arrImage })
		const oldImageUrl = updateStudent.image
		// console.log(oldImageUrl,'ll');
		for (let i = 0; i < oldImageUrl.length; i++) {
			fs.unlink(`img/${oldImageUrl[i].slice(22)}`, () => { })
		}
		res.send({ studentData: updateStudent })
	} catch (error) {
		res.send(404, error)
	}
}
