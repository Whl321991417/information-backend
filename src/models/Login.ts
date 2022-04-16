/**
 * 登录数据结构
 * @typedef {object} Login
 * @property {string} username.required - 用户名
 * @property {string} upwd.required - 密码
 */

export default interface Login {
    username: string;
    upwd: string
}