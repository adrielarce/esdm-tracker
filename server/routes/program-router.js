const express = require('express')
const ProgramCtrl = require('../controllers/goal-controller')

const router = express.Router()

router.post('/program', ProgramCtrl.createGoal)
router.put('/program/:id', ProgramCtrl.updateGoal)
router.delete('/program/:id', ProgramCtrl.deleteGoal)
router.get('/program/:id', ProgramCtrl.getGoalById)
router.get('/program', ProgramCtrl.getGoals)

module.exports = router