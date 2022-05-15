import db from '../DB/index'
import UserInfo from '../models/UserInfo'
export class UserService {
    getUserInfo() {
        return new Promise((reslove, reject) => {
            db.query('select * from usersinfo', [], (err, results) => {
                if (err) return console.log('出错啦~！', err)
                reslove(results)
            })
        })
    }
    //注册管理员
    creatUserInfo(body: UserInfo) {
        return new Promise((reslove, reject) => {
            db.query(
                'INSERT INTO `usersinfo` (`username`, `display_name`, `phone`, `upwd`) VALUES(?, ?, ?, ?);',
                [body.username, body.display_name, body.phone, body.upwd],
                (err, results) => {
                    if (err) {
                        reject(err)
                    } else {
                        reslove(results)
                    }
                })
        })
    }
    //修改管理员信息
    setUserInf(params, username) {
        return new Promise((reslove, reject) => {
            return new Promise((reslove, reject) => {
                db.query(
                    'UPDATE `usersinfo` SET ?=? where username=?',
                    [params.type, params.value, username],
                    (err, results) => {
                        if (err) {
                            reject(err)
                        } else {
                            reslove(results)
                        }
                    })
            })
        })
    }

}