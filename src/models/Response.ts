/**
 * 接口响应数据结构
 * @typedef {object} Response
 * @property {string} code - 状态码 - enum:"0","1"
 * @property {string} message - 消息 
 * @property {string} data - 数据包 
 */
export interface Response {
    code: string;//'0' 表示成功，'1'表示失败
    msg: string;
    data?: any
}