// Import the Role entity and its DAO
const Role = require('../model/Role');
const RoleDAO = require('../dao/RoleDAO');

class RoleService {
    static async getAllRoles() {
        try {
            return await RoleDAO.getAllRoles();
        } catch (error) {
            throw new Error(`Error fetching roles: ${error.message}`);
        }
    }

    static async getRoleById(id) {
        try {
            return await RoleDAO.getRoleById(id);
        } catch (error) {
            throw new Error(`Error fetching role: ${error.message}`);
        }
    }

    static async createRole(roleData) {
        try {
            const newRole = new Role();
            // Populate newRole with roleData properties
            // Example: newRole.name = roleData.name;

            return await RoleDAO.createRole(newRole);
        } catch (error) {
            throw new Error(`Error creating role: ${error.message}`);
        }
    }

    static async updateRole(id, roleData) {
        try {
            const existingRole = await RoleDAO.getRoleById(id);
            if (!existingRole) {
                return null; // Or throw an error/message indicating role not found
            }

            // Update existingRole properties with roleData
            // Example: existingRole.name = roleData.name;

            return await RoleDAO.updateRole(existingRole);
        } catch (error) {
            throw new Error(`Error updating role: ${error.message}`);
        }
    }

    static async deleteRole(id) {
        try {
            const existingRole = await RoleDAO.getRoleById(id);
            if (!existingRole) {
                return null; // Or throw an error/message indicating role not found
            }

            return await RoleDAO.deleteRole(existingRole);
        } catch (error) {
            throw new Error(`Error deleting role: ${error.message}`);
        }
    }
}

module.exports = RoleService;
