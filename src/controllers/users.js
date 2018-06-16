import { 
	getUsers,
	createUser,
	deleteUser,
	updateUser
} from '../services/users'
import { dispatchReponse } from '../utils/functions'

export default {
	getUsers: (req, res) => dispatchReponse(res, getUsers)(),
	createUser: (req, res) => dispatchReponse(res, createUser)(req.body),
	updateUser: (req, res) => dispatchReponse(res, updateUser)(req.params.id, req.body),
	deleteUser: (req, res) => dispatchReponse(res, deleteUser)(req.params.id)
}
