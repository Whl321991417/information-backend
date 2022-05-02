import db from '../DB/index'
export class StudentsInfService {
    getStudentsInfo() {
        return new Promise((reslove, reject) => {
            db.query('select * from studentinfo', [], (err, results) => {
                if (err) return console.log('出错啦~！', err)
                reslove(results)
                console.log("err:", err);

            })
        })
    }
    create(res: any) {

    }
}