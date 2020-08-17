import express from 'express'
import routes from './src/index'
const app = express()

app.use(express.json())

app.use(routes)

app.listen(3333, (() => {
    console.log('server started')
}));