import db from '../DB/index'
import UserInfo from '../models/UserInfo'
import jwt from 'jsonwebtoken';
export class LoginService {

    login(params: UserInfo) {
        return new Promise((reslove, reject) => {
            db.query('select * from usersinfo where username=? and upwd =?', [params.username, params.upwd], (err, results) => {
                if (err || !results) {
                    reject(err)
                }
                if (results.length > 0) {
                    const usrData = results[0]
                    const usr2 = { ...usrData, upwd: null }
                    const token = jwt.sign({ data: usr2 }, 'abcd_whl_123', { expiresIn: 60 * 24 * 60 })
                    reslove([token, results])
                }
            })
        })
    }
    create(res: any) {

    }
}