const controller = require('../controllers/studentController')

const route = (app) => {
	app.get('/student', controller.getStudent)
	app.post('/student', controller.addStudent)
	app.delete('/student/:id', controller.deleteStudent)
	app.delete('/student/', controller.deleteOneStudent)
	app.put('/student/:id', controller.updateStudent)
}
module.exports = route