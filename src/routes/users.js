import { Router } from 'express'
import Users from '../controllers/users'
import { safeRoute } from '../utils/functions'

const usersRouter = Router()
usersRouter.get('/', safeRoute(Users.getUsers))
usersRouter.post('/', safeRoute(Users.createUser))
usersRouter.put('/:id', safeRoute(Users.updateUser))
usersRouter.delete('/:id', safeRoute(Users.deleteUser))

export default usersRouter