import beforeRequest from '../middleware/beforeRequest'
import { route, GET, POST, before, DELETE } from 'awilix-express' // or `awilix-router-core`
import { StudentsInfService } from '../services/StudentsInfService'
import { Response } from '../models/Response'
/**
 * 
 */
@route('/api')
export default class StuInfController {
    studentsinfService: StudentsInfService
    constructor({ studentsinfService }) {
        this.studentsinfService = studentsinfService
    }

    @route('/stulist')
    //查询所有信息
    @GET()
    @before([beforeRequest()])
    async getUser(req, res) {
        const result = await this.studentsinfService.getStudentsInfo(req.body)
        let data = {
            msg: '获取学生列表成功',
            code: '0',
            list: result
        }
        res.send(data)
    }
    //增加学生信息
    @route('/stulist')
    @POST()
    async createDormitory(req, res) {
        if (!req.body.name) {
            const data: Response = {
                msg: '名称不能为空',
                code: "1",
                data: ''
            }
            res.send(data)
            return
        }
        await this.studentsinfService.create(req.body)
        const data: Response = {
            msg: '新增学生成功',
            code: "0",
            data: ''
        }
        res.send(data)
    }
    //删除学生信息
    @route('/stulist/:stunum')
    @DELETE()
    async deleteDormitorybyId(req, res) {
        const id = req.params.id
        await this.StudentsInfService.deleteDormitorybyId(id)
        const data: Response = {
            msg: '删除成功',
            code: "0"
        }
        res.send(data)
    }
    //修改学生信息

}