

import beforeRequest from '../middleware/beforeRequest'
import { route, GET, POST, before } from 'awilix-express' // or `awilix-router-core`
import { UserService } from '../services/UserService'
/**
 * 
 */
@route('/api')
export default class UserController {
    userService: UserService
    constructor({ userService }) {
        this.userService = userService
    }

    @route('/list')
    @GET()
    @before([beforeRequest()])
    async getUser(req, res) {
        const result = await this.userService.getUserInfo()
        let data = {
            msg: '获取学生列表成功',
            statuscode: 0,
            list: result
        }
        res.send(data)
    }
}