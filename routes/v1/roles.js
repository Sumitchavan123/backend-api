const express = require('express');
const router = express.Router();

// Import services for Community, Role, and Member
const CommunityService = require('../../service/CommunityService');
const RoleService = require('../../service/RoleService');
const MemberService = require('../../service/MemberService');

// Routes for Role entity
router.get('/roles', async (req, res) => {
    try {
        const roles = await RoleService.getAllRoles();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/roles/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const role = await RoleService.getRoleById(id);
        if (!role) {
            return res.status(404).json({ error: 'Role not found' });
        }
        res.json(role);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;