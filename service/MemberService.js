// Import the Member entity and its DAO
const Member = require('../model/Member');
const MemberDAO = require('../dao/MemberDAO');

class MemberService {
    static async getAllMembers() {
        try {
            return await MemberDAO.getAllMembers();
        } catch (error) {
            throw new Error(`Error fetching members: ${error.message}`);
        }
    }

    static async getMemberById(id) {
        try {
            return await MemberDAO.getMemberById(id);
        } catch (error) {
            throw new Error(`Error fetching member: ${error.message}`);
        }
    }

    static async createMember(memberData) {
        try {
            const newMember = new Member();
            // Populate newMember with memberData properties
            // Example: newMember.community = memberData.communityId;
            // Example: newMember.user = memberData.userId;
            // Example: newMember.role = memberData.roleId;

            return await MemberDAO.createMember(newMember);
        } catch (error) {
            throw new Error(`Error creating member: ${error.message}`);
        }
    }

    static async updateMember(id, memberData) {
        try {
            const existingMember = await MemberDAO.getMemberById(id);
            if (!existingMember) {
                return null; // Or throw an error/message indicating member not found
            }

            // Update existingMember properties with memberData
            // Example: existingMember.community = memberData.communityId;
            // Example: existingMember.user = memberData.userId;
            // Example: existingMember.role = memberData.roleId;

            return await MemberDAO.updateMember(existingMember);
        } catch (error) {
            throw new Error(`Error updating member: ${error.message}`);
        }
    }

    static async deleteMember(id) {
        try {
            const existingMember = await MemberDAO.getMemberById(id);
            if (!existingMember) {
                return null; // Or throw an error/message indicating member not found
            }

            return await MemberDAO.deleteMember(existingMember);
        } catch (error) {
            throw new Error(`Error deleting member: ${error.message}`);
        }
    }
}

module.exports = MemberService;
