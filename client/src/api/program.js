import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/program',
})

export const insertGoal = payload => api.post(`/program`, payload)
export const getAllGoals = () => api.get(`/program`)
export const updateGoalById = (id, payload) => api.put(`/program/${id}`, payload)
export const deleteGoalById = id => api.delete(`/program/${id}`)
export const getGoalById = id => api.get(`/program/${id}`)

const apis = {
    insertGoal,
    getAllGoals,
    updateGoalById,
    deleteGoalById,
    getGoalById,
}

export default apis