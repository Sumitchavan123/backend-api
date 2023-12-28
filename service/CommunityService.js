// Import the CommunityService entity and its DAO
const CommunityService = require('../model/Community');
const CommunityDAO = require('../dao/CommunityDAO');

class CommunityService {
    static async getAllCommunities() {
        try {
            return await CommunityDAO.getAllCommunities();
        } catch (error) {
            throw new Error(`Error fetching communities: ${error.message}`);
        }
    }

    static async getCommunityById(id) {
        try {
            return await CommunityDAO.getCommunityById(id);
        } catch (error) {
            throw new Error(`Error fetching community: ${error.message}`);
        }
    }

    static async createCommunity(communityData) {
        try {
            const newCommunity = new CommunityService();
            // Populate newCommunity with communityData properties
            // Example: newCommunity.name = communityData.name;
            // Example: newCommunity.slug = communityData.slug;

            return await CommunityDAO.createCommunity(newCommunity);
        } catch (error) {
            throw new Error(`Error creating community: ${error.message}`);
        }
    }

    static async updateCommunity(id, communityData) {
        try {
            const existingCommunity = await CommunityDAO.getCommunityById(id);
            if (!existingCommunity) {
                return null; // Or throw an error/message indicating community not found
            }

            // Update existingCommunity properties with communityData
            // Example: existingCommunity.name = communityData.name;
            // Example: existingCommunity.slug = communityData.slug;

            return await CommunityDAO.updateCommunity(existingCommunity);
        } catch (error) {
            throw new Error(`Error updating community: ${error.message}`);
        }
    }

    static async deleteCommunity(id) {
        try {
            const existingCommunity = await CommunityDAO.getCommunityById(id);
            if (!existingCommunity) {
                return null; // Or throw an error/message indicating community not found
            }

            return await CommunityDAO.deleteCommunity(existingCommunity);
        } catch (error) {
            throw new Error(`Error deleting community: ${error.message}`);
        }
    }
}

module.exports = CommunityService;
