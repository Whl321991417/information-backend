import { v4 as uuidv4 } from 'uuid';
import { createDormitory, queryDormitory, updateDormitoryById } from '../DB/sqls'
import { Dormitory } from '../models/Dormitory';
export class DormitoryService {
    async create(body: Dormitory) {
        const params: Dormitory = { ...body }
        params.manager = body.manager || '';
        params.id = uuidv4();
        return await createDormitory(params)
    }
    async getList(params?: any) {
        return await queryDormitory(params)
    }

    async updateDormitorybyId(id: string, params: any) {
        return await updateDormitoryById(id, params)
    }
    async deleteDormitorybyId(id: string) {
        return await updateDormitoryById(id, {
            is_delete: 0
        })
    }
}