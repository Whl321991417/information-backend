import db from '.'
import { Dormitory } from '../models/Dormitory'
export async function createDormitory(params: Dormitory) {
    return new Promise((reslove, reject) => {
        db.query(
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
export async function updateDormitoryById(id: string, params: any) {
    return new Promise((reslove, reject) => {
        db.query(
            'UPDATE `dormitory` SET ? where id=?',
            [params, id],
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    reslove(results)
                }
            })
    })
}
export async function queryDormitory(params: any) {

    const keys = Object.keys(params)
    const values = Object.values(params).filter(value => value)
    let searchOptions = ''
    keys.forEach(key => {
        if (params[key]) {
            searchOptions += " and " + key + '=?'
        }
    })
    let sql = 'SELECT * from `dormitory` where is_delete = 1 ' + searchOptions
   
    return new Promise((reslove, reject) => {
        db.query(sql, values, (err, results) => {
            if (err) {
                reject(err)
            } else {
                reslove(results)
            }
        })
    })
}
