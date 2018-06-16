import {
	SUCCESS,
	CREATED,
	NOT_FOUND
} from '../../utils/statusCodes'
import faker from 'faker'

const simpleUser = () => ({
	id: faker.lorem.word(),
	name: faker.name.findName(),
	email: faker.internet.email(),
	password: faker.lorem.word(),
	avatar: faker.image.avatar()
})
const staticUsers = [simpleUser()]

// Users method service
export const getUsers = () => ({ statusCode: SUCCESS, data: staticUsers })

export const createUser = (newUser) => {
	newUser.id = faker.lorem.word()
	staticUsers.push(newUser)
	return { statusCode: CREATED, data: staticUsers.length }
}

export const updateUser = (userId, newUser) => {
	const user = staticUsers.find(user => user.id === userId)
	if (user) {
		user.name = newUser.name
		user.email = newUser.email
		user.password = newUser.password
		user.avatar = newUser.avatar
		return { statusCode: SUCCESS, data: user }
	}

	return { statusCode: NOT_FOUND, data: 'User not found' }
}

export const deleteUser = (userId) => {
	const index = staticUsers
		.map(user => user.id)
		.lastIndexOf(userId)

	if (index > 0) {
		staticUsers.splice(index, 1)
		return { statusCode: SUCCESS, data: staticUsers.length }
	}
	return { statusCode: NOT_FOUND, data: 'User not found' }
}
