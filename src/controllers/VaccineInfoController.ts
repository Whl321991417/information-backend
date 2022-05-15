import beforeRequest from '../middleware/beforeRequest'
import { route, GET, POST, before, DELETE } from 'awilix-express' // or `awilix-router-core`
import { VaccineInfoService } from '../Services/VaccineInfService'
/**
 * 
 */
@route('/api')
export default class VaccineInfoController {
    vaccineinfoService: VaccineInfoService
    constructor({ vaccineinfoService }) {
        this.vaccineinfoService = vaccineinfoService
    }

    @route('/vaccine')
    @GET()
    @before([beforeRequest()])
    async getUser(req, res) {
        const result = await this.vaccineinfoService.getVaccineInfo()
        let data = {
            msg: '获取疫苗列表成功',
            code: '0',
            list: result
        }
        res.send(data)
    }
    //新增疫苗信息
    @route('/vaccine')
    @POST()
    async createStudents(req, res) {

        // if (!req.body.stunum) {
        //     const data: Response = {
        //         msg: '名称不能为空',
        //         code: "1",
        //         data: ''
        //     }
        //     res.send(data)
        //     return
        // }
        const result = await this.vaccineinfoService.creatVaccineInfoService(req.body)
        const data = {
            msg: '新增疫苗信息成功',
            code: "0"
        }
        res.send(data)
    }
    //删除疫苗信息
    @route('/vaccine/:stunum')
    @DELETE()
    async deleteStudentByStunum(req, res) {
        const stunum = req.params.stunum
        const result = await this.vaccineinfoService.deleteVaccineInfoService(stunum)
        const data = {
            msg: '删除成功',
            code: "0"
        }
        res.send(data)
    }

}