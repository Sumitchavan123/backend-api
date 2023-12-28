// Import the User entity and its DAO
const User = require('../model/User');
const UserDAO = require('../dao/UserDAO');

class UserService {
  static async getAllUsers() {
    try {
      return await UserDAO.getAllUsers();
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }

  static async getUserById(id) {
    try {
      return await UserDAO.getUserById(id);
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }

  static async createUser(userData) {
    try {
      const newUser = new User();
      // Populate newUser with userData properties
      // Example: newUser.name = userData.name;
      // Example: newUser.email = userData.email;

      return await UserDAO.createUser(newUser);
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  static async updateUser(id, userData) {
    try {
      const existingUser = await UserDAO.getUserById(id);
      if (!existingUser) {
        return null; // Or throw an error/message indicating user not found
      }

      // Update existingUser properties with userData
      // Example: existingUser.name = userData.name;
      // Example: existingUser.email = userData.email;

      return await UserDAO.updateUser(existingUser);
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  static async deleteUser(id) {
    try {
      const existingUser = await UserDAO.getUserById(id);
      if (!existingUser) {
        return null; // Or throw an error/message indicating user not found
      }

      return await UserDAO.deleteUser(existingUser);
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}

module.exports = UserService;
