const { getConnection } = require('typeorm');
const Role = require('../model/Role');

class RoleDAO {
    static async getAllRoles() {
        const roleRepository = getConnection().getRepository(Role);
        return await roleRepository.find();
    }

    static async getRoleById(id) {
        const roleRepository = getConnection().getRepository(Role);
        return await roleRepository.findOne(id);
    }

    static async createRole(newRole) {
        const roleRepository = getConnection().getRepository(Role);
        return await roleRepository.save(newRole);
    }

    static async updateRole(role) {
        const roleRepository = getConnection().getRepository(Role);
        return await roleRepository.save(role);
    }

    static async deleteRole(role) {
        const roleRepository = getConnection().getRepository(Role);
        return await roleRepository.remove(role);
    }
}

module.exports = RoleDAO;
