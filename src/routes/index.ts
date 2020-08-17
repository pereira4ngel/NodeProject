import express from 'express'

const routes = express.Router()

routes.post('/classes', (request, response) => {
    const date = request.body
    console.log(date)
    return response.send()
})

export default routes