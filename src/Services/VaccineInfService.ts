import db from '../DB/index'
import { createVaccineInf, deleteVaccineByStunum } from '../DB/sqls'
import { vaccineinf } from '../models/VaccineInf'
export class VaccineInfoService {

    getVaccineInfo() {
        return new Promise((reslove, reject) => {

            db.query(
                'select studentinfo.college,studentinfo.classroom,studentinfo.stunum,studentinfo.name,type,date,heal from studentinfo,vaccineinf where studentinfo.stunum=vaccineinf.stunum',
                [], (err, results) => {
                    if (err) return console.log('出错啦~！', err)
                    reslove(results)
                })
        })
    }
    //删除疫苗信息
    async deleteVaccineInfoService(stunum: string) {
        return await deleteVaccineByStunum(stunum)
    }
    //新增疫苗信息
    async creatVaccineInfoService(body: vaccineinf) {
        const params: vaccineinf = { ...body }
        params.heal = body.heal || '';
        return await createVaccineInf(params)
    }

}

