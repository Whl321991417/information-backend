
enum DormitoryType {
    AREA = "area",
    APARTMENT = "apartment",
    ROOM = "room"
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
    pid: string
}