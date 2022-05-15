


import { route, GET, POST, before } from 'awilix-express' // or `awilix-router-core`
import { Response } from '../models/Response'
import { LoginService } from '../services/LoginService'

@route('/api')
export default class LoginController {

    constructor({ loginService }) {
        this.loginService = loginService
    }
    public loginService: LoginService

    /**
     * POST /api/login
     * @summary 登录接口
     * @tags 登录
     * @param {Login} request.body.required - song info
     * @return {object} 200 - song response
     * @return {object} 400 - Bad request response
     */
    @route('/login')
    @POST()
    async login(req, res) {
        let data: Response
        try {
            const token = await this.loginService.login(req.body)
            data = {
                msg: '登录校验通过',
                code: "0",
                data: token
            }
            res.send(data)
        } catch (error) {
            res.send({
                msg: error,
                code: "1"
            })
        }

    }

}