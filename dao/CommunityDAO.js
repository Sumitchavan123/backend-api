const { getConnection } = require('typeorm');
const Community = require('../model/Community');

class CommunityDAO {
    static async getAllCommunities() {
        const communityRepository = getConnection().getRepository(Community);
        return await communityRepository.find();
    }

    static async getCommunityById(id) {
        const communityRepository = getConnection().getRepository(Community);
        return await communityRepository.findOne(id);
    }

    static async createCommunity(newCommunity) {
        const communityRepository = getConnection().getRepository(Community);
        return await communityRepository.save(newCommunity);
    }

    static async updateCommunity(community) {
        const communityRepository = getConnection().getRepository(Community);
        return await communityRepository.save(community);
    }

    static async deleteCommunity(community) {
        const communityRepository = getConnection().getRepository(Community);
        return await communityRepository.remove(community);
    }
}

module.exports = CommunityDAO;
