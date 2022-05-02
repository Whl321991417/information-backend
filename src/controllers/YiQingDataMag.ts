import beforeRequest from '../middleware/beforeRequest'
import { route, GET, POST, before } from 'awilix-express' // or `awilix-router-core`
import { YiQingService } from '../services/YiQingService'
/**
 * 
 */
@route('/api')
export default class dataController {
    yiqingService: YiQingService
    constructor({ yiqingService }) {
        this.yiqingService = yiqingService
    }

    @route('/yiqing')
    @POST()
    @before([beforeRequest()])
    async getdata(req, res) {
        const result = await this.yiqingService.getdataInfo()
        let data = {
            msg: '获取疫情数据成功',
            code: '0',
            list: result
        }
        res.send(data)
    }
}