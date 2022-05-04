import db from '../DB/index'
import { createStudentInf, deleteStudentByStunum } from '../DB/sqls'
import { Students } from '../models/Students'
export class StudentsInfService {
    getStudentsInfo(params: any) {
        return new Promise((reslove, reject) => {
            let sql = 'select * from studentinfo '
            if (params) {
                sql = sql + 'whrer stunum like "%?%"', [params]
            }
            db.query(sql, [], (err, results) => {
                if (err) return console.log('出错啦~！', err)
                reslove(results)
                console.log("err:", err);

            })
        })
    }
    async create(body: Students) {
        const params: Students = { ...body }
        params.birthday = body.birthday || '';

        return await createStudentInf(params)
    }
    //删除
    async deleteStudentByStunum(stunum: string) {
        return await deleteStudentByStunum(stunum)
    }
}