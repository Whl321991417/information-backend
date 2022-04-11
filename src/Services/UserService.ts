import db from '../DB/index'
export class UserService {
    getUserInfo() {
        return new Promise((reslove, reject) => {
            db.query('select * from usersinfo', [], (err, results) => {
                if (err) return console.log('出错啦~！',err)
                reslove(results)
            })
        })
    }
    create(res: any) {

    }
}