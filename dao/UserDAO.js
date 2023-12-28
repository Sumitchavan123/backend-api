const { getConnection } = require('typeorm');
const User = require('../model/User');

class UserDAO {
    static async getAllUsers() {
        const userRepository = getConnection().getRepository(User);
        return await userRepository.find();
    }

    static async getUserById(id) {
        const userRepository = getConnection().getRepository(User);
        return await userRepository.findOne(id);
    }

    static async createUser(newUser) {
        const userRepository = getConnection().getRepository(User);
        return await userRepository.save(newUser);
    }

    static async updateUser(user) {
        const userRepository = getConnection().getRepository(User);
        return await userRepository.save(user);
    }

    static async deleteUser(user) {
        const userRepository = getConnection().getRepository(User);
        return await userRepository.remove(user);
    }
}

module.exports = UserDAO;
