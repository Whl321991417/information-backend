import beforeRequest from '../middleware/beforeRequest'
import { route, GET, POST, before } from 'awilix-express' // or `awilix-router-core`
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
}