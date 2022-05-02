
import request from 'request'

export class YiQingService {
    getdataInfo() {
        let url = "https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf";
        return new Promise((reslove, reject) => {
            request({
                url: url,
                method: "POST",
                json: true
            }, function (error, response, body) {
                reslove(body.data)
            });
        })

    }
}