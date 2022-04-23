import db from '../DB/index'
import UserInfo from '../models/UserInfo'
export class LoginService {

    login(params: UserInfo) {
        return new Promise((reslove, reject) => {
            db.query('select * from usersinfo where username=? and upwd =?', [params.username, params.upwd], (err, results) => {
                if (err || !results) {
                    reject(err)
                }
                if (results.length > 0) {
                    const usrData = results[0]
                    const jwt = require('jsonwebtoken');
                    const usr2 = { ...usrData, upwd: null }
                    const token = jwt.sign({ data: usr2 }, 'abc_dx_1008', { expiresIn: 60 * 24 * 60 })
                    reslove(token)
                }

            })
        })
    }
    create(res: any) {

    }
}