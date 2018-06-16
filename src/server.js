import 'babel-polyfill'
import express from 'express'
import cors from 'cors'
import logger from 'morgan'

import conf from './config'
import setRoutes from './routes'
import setUpDatabaseConnection from './services/db'

const app = express()

app.use(cors())
app.use(logger(conf.logger))
app.use(express.json())

setRoutes(app)

app.listen(conf.port, err => {
	if (err) {
		console.log(`Error on server startup ${err}`)
		process.exit(1)
	}

	setUpDatabaseConnection()

	console.log(`Example app listening on ${conf.host}:${conf.port}!`)
})
