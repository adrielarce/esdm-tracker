const Goal = require('../models/goal-model')

createGoal = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a goal',
        })
    }

    const goal = new Goal(body)

    if (!goal) {
        return res.status(400).json({ success: false, error: err })
    }
    goal
        .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: goal._id,
                    message: 'Goal has been added',
                })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Goal couldn\'t be created',
            })
        })
}

updateGoal = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a goal to update',
        })
    }

    Goal.findOne({ _id: req.params.id }, (err, goal) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Goal not found!',
            })
        }
        goal.name = body.name
        goal.substep1 = body.substep1
        goal.substep2 = body.substep2
        goal.substep3 = body.substep3
        goal
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: goal._id,
                    message: 'Goal updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Goal not updated!',
                })
            })
    })
}
getGoalById = async (req, res) => {
    await Goal.findOne({ _id: req.params.id }, (err, goal) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!goal) {
            return res
                .status(404)
                .json({ success: false, error: `Goal not found` })
        }
        return res.status(200).json({ success: true, data: goal })
    }).catch(err => console.log(err))
}
deleteGoal = async (req, res) => {
    await Goal.findOneAndDelete({ _id: req.params.id }, (err, goal) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!goal) {
            return res
                .status(404)
                .json({ success: false, error: `Goal not found` })
        }

        return res.status(200).json({ success: true, data: goal })
    }).catch(err => console.log(err))
}
getGoals = async (req, res) => {
    await Goal.find({}, (err, goals) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!goals.length) {
            return res
                .status(404)
                .json({ success: false, error: `Goal not found` })
        }
        return res.status(200).json({ success: true, data: goals })
    }).catch(err => console.log(err))
}

module.exports = {
    createGoal,
    updateGoal,
    deleteGoal,
    getGoalById,
    getGoals,
}