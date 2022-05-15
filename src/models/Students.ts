/**
 * 学生信息
 * @typedef {object} Students
 * @property {string} stunum.required - 学号
 * @property {string} name.required - 姓名  
 * @property {string} sex - 性别 
 * @property {string} birthday - 出生日期 
 * @property {string} room - 宿舍号
 * @property {string} phone - 电话号码
 * @property {string} college - 学院
 * @property {string} classroom - 班级
 */
export interface Students {
    stunum: string;
    name: string;
    sex: string;
    birthday: string;
    room: string;
    phone: string;
    college: string;
    classroom: string;
}