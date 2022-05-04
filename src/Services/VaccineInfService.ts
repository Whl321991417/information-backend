import db from '../DB/index'
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
    create(res: any) {

    }
}