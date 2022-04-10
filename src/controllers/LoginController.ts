

import beforeRequest from '../middleware/beforeRequest'
import { route, GET, POST, before } from 'awilix-express' // or `awilix-router-core`
import { LoginService } from '../services/LoginService'
/**
 * 用户登录
 */
@route('/api')
export default class LoginController {

    constructor({ loginService }) {
        this.loginService = loginService
    }
    public loginService: LoginService

    @route('/login')
    @POST()
    async login(req, res) {
        const token = await this.loginService.login(req.body)
        let data = {
            msg: '获取学生列表成功',
            statuscode: 0,
            token: token
        }
        res.send(data)
    }

}