const express = require('express');
const router = express.Router();

// Import services for Community, Role, and Member
const CommunityService = require('../../service/CommunityService');
const RoleService = require('../../service/RoleService');
const MemberService = require('../../service/MemberService');

router.get('/members', async (req, res) => {
    try {
        const members = await MemberService.getAllMembers();
        res.json(members);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/members/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const member = await MemberService.getMemberById(id);
        if (!member) {
            return res.status(404).json({ error: 'Member not found' });
        }
        res.json(member);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;