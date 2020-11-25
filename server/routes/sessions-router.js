const express = require('express')
const SessionCtrl = require('../controllers/session-controller')

const router = express.Router()

router.post('/sessions', SessionCtrl.createSession)
router.put('/sessions/:id', SessionCtrl.updateSession)
router.delete('/sessions/:id', SessionCtrl.deleteSession)
router.get('/sessions/:id', SessionCtrl.getSessionById)
router.get('/sessions', SessionCtrl.getSessions)

module.exports = router