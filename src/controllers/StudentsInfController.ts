import beforeRequest from '../middleware/beforeRequest'
import { route, GET, POST, before } from 'awilix-express' // or `awilix-router-core`
import { StudentsInfService } from '../services/StudentsInfService'
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
    @GET()
    @before([beforeRequest()])
    async getUser(req, res) {
        const result = await this.studentsinfService.getStudentsInfo()
        let data = {
            msg: '获取学生列表成功',
            code: '0',
            list: result
        }
        res.send(data)
    }
}