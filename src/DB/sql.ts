import db from '.'
import { Dormitory } from '../models/Dormitory'
export async function createDormitory(params: Dormitory) {
    return new Promise((reslove, reject) => {
        db.execute(
            'INSERT INTO `dormitory` (`name`, `id`, `type`, `manager`, `pid`) VALUES (?, ?, ?, ?, ?);',
            [params.name, params.id, params.type, params.manager, params.pid],
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    reslove(results)
                }
            })
    })
}
export async function getDormitory(name: string) {
    let sql = 'SELECT * from `dormitory` '
    if (name) {
        sql += 'where name =?'
    }
    return new Promise((reslove, reject) => {
        db.query(sql, [name], (err, results) => {
            if (err) {
                reject(err)
            } else {
                reslove(results)
            }
        })
    })
}