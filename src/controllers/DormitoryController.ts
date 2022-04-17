
import { route, GET, POST, DELETE, } from 'awilix-express'
import { Dormitory, DormitoryType } from '../models/Dormitory'
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
     * @param {Dormitory} request.body.required - body info
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
    * @param {string} pid.query - pid id
    * @return {object} 200 - song response
    * @example response - 200 - example success response
    * [
    *   {
    *     "name": "Blaze",
    *     "id": "123",
    *     "pid": ""
    *     children:[]
    *   }
    * ]
    * @return {object} 400 - Bad request response
    */
    @route('/dormitory')
    @GET()
    async getDormitory(req, res) {
        const result: any[] = []
        const queryData: Dormitory = req.query
        if (Object.keys(queryData).length > 0) {
            const areaList = await this.dormitoryService.getList({
                ...queryData
            })
            const data: Response = {
                msg: '查询宿舍成功',
                code: "0",
                data: areaList
            }
            res.send(data)
            return
        }
        const areaList = await this.dormitoryService.getList({
            type: DormitoryType.AREA
        })
        result.push(...(areaList as any))
        for (let index = 0; index < result.length; index++) {
            const area = result[index];
            const apartmentList = await this.dormitoryService.getList({
                pid: area.id
            })
            area.children = apartmentList
        }
        const data: Response = {
            msg: '查询宿舍成功',
            code: "0",
            data: result
        }
        res.send(data)
    }

    /**
    * POST /api/dormitory/{id}
    * @summary 更新宿舍列表
    * @tags 宿舍管理
    * @security BearerAuth
    * @param {string} id.path - 宿舍id
    * @param {Update} request.body.required - body info
    * @return {object} 200 - song response
    * @return {object} 400 - Bad request response
    */
    @route('/dormitory/:id')
    @POST()
    async updateDormitorybyId(req, res) {
        const id = req.params.id
        await this.dormitoryService.updateDormitorybyId(id, req.body)
        const data: Response = {
            msg: '修改成功',
            code: "0"
        }
        res.send(data)
    }

    /**
    * DELETE /api/dormitory/{id}
    * @summary 删除宿舍列表
    * @tags 宿舍管理
    * @security BearerAuth
    * @param {string} id.path - 宿舍id
    * @return {object} 200 - song response
    * @return {object} 400 - Bad request response
    */
    @route('/dormitory/:id')
    @DELETE()
    async deleteDormitorybyId(req, res) {
        const id = req.params.id
        await this.dormitoryService.deleteDormitorybyId(id)
        const data: Response = {
            msg: '删除成功',
            code: "0"
        }
        res.send(data)
    }
}