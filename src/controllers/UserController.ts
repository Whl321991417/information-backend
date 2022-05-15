

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
        let result: any = await this.userService.getUserInfo()
        let data = {
            msg: '验证管理员成功',
            statuscode: 0,
            list: result[0],
            user: result[1]
        }
        res.send(data)
    }
    @route('/updatelist')
    @GET()
    @before([beforeRequest()])
    async setUser(req, res) {
        let result: any = await this.userService.setUserInf(req.body.params, req.body.username)
        let data = {
            msg: '修改管理员信息成功',
            statuscode: 0,
            list: result[0],
            user: result[1]
        }
        res.send(data)
    }
    @route('/list')
    @POST()
    @before([beforeRequest()])
    async creatUser(req, res) {
        let result: any = await this.userService.creatUserInfo(req.body)
        let data = {
            msg: '验证管理员成功',
            statuscode: 0,
            list: result[0],
            user: result[1]
        }
        res.send(data)
    }

}