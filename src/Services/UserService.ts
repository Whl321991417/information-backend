import db from '../DB/index'
export class UserService {
    // constructor(app) {
    //     console.log(app);
    // }
    getUserInfo(query: any) {
        return new Promise((reslove, reject) => {
            db.query('select * from studentinfo', [query], (err, results) => {
                if (err) return console.log('出错啦~！')
                reslove(results)
            })
        })
    }
    create(res: any) {

    }
}