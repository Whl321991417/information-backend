
import { route, GET, POST, } from 'awilix-express'
import { Response } from '../models/Response'
import { DormitoryService } from '../services/DormitoryService'


@route('/api')
export default class DormitoryController {

    constructor({ dormitoryService }) {
        this.dormitoryService = dormitoryService
    }
    public dormitoryService: DormitoryService
    /**
     * POST /api/dormitory
     * @summary 添加宿舍信息
     * @tags 宿舍管理
     * @security BearerAuth
     * @param {Dormitory} request.body.required - song info
     * @return {object} 200 - song response
     * @return {object} 400 - Bad request response
     */
    @route('/dormitory')
    @POST()
    async createDormitory(req, res) {
        await this.dormitoryService.create(req.body)
        const data: Response = {
            msg: '新增宿舍成功',
            code: "0",
            data: ''
        }
        res.send(data)
    }
    /**
    * GET /api/dormitory
    * @summary 获取宿舍列表
    * @tags 宿舍管理
    * @security BearerAuth
    * @param {string} name.query - name 宿舍名称
    * @return {object} 200 - song response
    * @return {object} 400 - Bad request response
    */
    @route('/dormitory')
    @GET()
    async getDormitory(req, res) {
        const result = await this.dormitoryService.getList(req.query.name)
        const data: Response = {
            msg: '查询宿舍成功',
            code: "0",
            data: result
        }
        res.send(data)
    }
}