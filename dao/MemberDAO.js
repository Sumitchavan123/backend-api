const { getConnection } = require('typeorm');
const Member = require('../model/Member');

class MemberDAO {
    static async getAllMembers() {
        const memberRepository = getConnection().getRepository(Member);
        return await memberRepository.find();
    }

    static async getMemberById(id) {
        const memberRepository = getConnection().getRepository(Member);
        return await memberRepository.findOne(id);
    }

    static async createMember(newMember) {
        const memberRepository = getConnection().getRepository(Member);
        return await memberRepository.save(newMember);
    }

    static async updateMember(member) {
        const memberRepository = getConnection().getRepository(Member);
        return await memberRepository.save(member);
    }

    static async deleteMember(member) {
        const memberRepository = getConnection().getRepository(Member);
        return await memberRepository.remove(member);
    }
}

module.exports = MemberDAO;
