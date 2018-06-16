const dbUser = process.env.DB_USER || ''
const dbPassword = process.env.DB_PASS || ''
const dbHost = process.env.DB_HOST || ''

export default {
	host: 'localhost',
	port: 4000,
	logger: 'dev',
	mongoURI: `mongodb://${dbUser}:${dbPassword}@${dbHost}`
}