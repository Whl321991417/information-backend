
export enum DormitoryType {
    AREA = "area",//区域
    APARTMENT = "apartment",//公寓楼
    ROOM = "room" //宿舍
}
/**
 * 宿舍信息
 * @typedef {object} Dormitory
 * @property {string} name.required - 名称
 * @property {string} type.required - 类型 - enum:area,apartment,room
 * @property {string} manager.required - 管理员 
 * @property {string} pid - 父级id 
 */
export interface Dormitory {
    id: string;
    name: string;
    type: DormitoryType;
    manager: string;
    pid: string;
}


/**
 * 修改接口所接受的参数
 * @typedef {object} Update
 * @property {string} name - 用户名
 * @property {string} manager - 密码
 */

export interface Update {
    username: string;
    upwd: string
}
/**
 * 返回给前端的数据
 * @typedef {object} ResponseData
 * @property {string} name - 宿舍名
 * @property {string} id - id
 * @property {string} pid - 父级id
 * @property {string} children - 子元素
 */

export interface ResponseData {
    name: string;
    id: string;
    pid: string;
    children: ResponseData[]
}
