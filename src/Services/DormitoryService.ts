import { v4 as uuidv4 } from 'uuid';
import { createDormitory, getDormitory } from '../DB/sql'
import { Dormitory } from '../models/Dormitory';
export class DormitoryService {
    async create(body: Dormitory) {
        const params: Dormitory = { ...body }
        params.id = uuidv4();
        return await createDormitory(params)
    }
    async getList(name: string) {
        return await getDormitory(name)
    }
}