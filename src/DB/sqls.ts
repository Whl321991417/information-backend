import db from '.'
import { Dormitory } from '../models/Dormitory'
import { Students } from '../models/Students'
import { vaccineinf } from '../models/VaccineInf'
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
export async function queryDormitoryByName(params: any) {
    const { pid, name } = params
    let sql = 'SELECT * from `dormitory` where is_delete = 1 and pid = ? and name like "%' + name + '%"'

    return new Promise((reslove, reject) => {
        db.query(sql, [pid], (err, results) => {
            if (err) {
                reject(err)
            } else {
                reslove(results)
            }
        })
    })
}
//添加学生信息
export async function createStudentInf(params: Students) {
    return new Promise((reslove, reject) => {
        db.query(
            'INSERT INTO `studentinfo` (`stunum`, `name`, `sex`, `birthday`, `room`, `phone`, `college`, `classroom`) VALUES(?, ?, ?, ?, ?, ?, ?, ?);',
            [params.stunum, params.name, params.sex, params.birthday, params.room, params.phone, params.college, params.classroom],
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    reslove(results)
                }
            })
    })

}
//删除学生信息

export async function deleteStudentByStunum(stunum: string) {
    return new Promise((reslove, reject) => {
        db.query(
            'DELETE FROM `studentinfo` WHERE stunum=?',
            [stunum],
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    reslove(results)
                }
            })
    })
}
export async function updateStudentInfo(params: Students) {
    return new Promise((reslove, reject) => {
        db.query(
            'UPDATE `studentinfo` SET ? where stunum=?',
            [params, params.stunum],
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    reslove(results)
                }
            })
    })
}
//新增疫苗信息
export async function createVaccineInf(params: vaccineinf) {
    return new Promise((reslove, reject) => {
        db.query(
            'INSERT INTO `vaccineinf` (`stunum`, `date`,`type`,`heal`) VALUES(?, ?, ?, ?);',
            [params.stunum, params.date, params.type, params.heal],
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    reslove(results)
                }
            })
    })

}
//删除疫苗信息

export async function deleteVaccineByStunum(stunum: string) {
    return new Promise((reslove, reject) => {
        db.query(
            'DELETE FROM `vaccineinf` WHERE stunum=?',
            [stunum],
            (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    reslove(results)
                }
            })
    })
}