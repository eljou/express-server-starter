import { config } from 'dotenv'
config()

let configs
if (process.env.ENV == 'development') {
	configs = require('./local')
} // otherwise load other configuration

export default configs.default