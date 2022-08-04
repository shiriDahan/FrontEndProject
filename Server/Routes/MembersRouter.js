const express = require('express')
const router = express.Router()
const membersBl = require('../Bl/MembersBl')

router.get("/", async (req, res) => {
    try {
        const members = await membersBl.getAllMembers()
        res.status(200).json(members)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.get("/:id", async (req, res) => {
    let id = req.params.id
    try {
        const member = await membersBl.getMemberById(id)
        res.status(200).json(member)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.post("/", async (req, res) => {
    const member = req.body
    console.log(member);
    try {
        const status = await membersBl.createNewMember(member)
        res.status(200).json(status)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const status = await membersBl.deleteMemberById(id)
        res.status(200).json(status)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const member = req.body
    try {
        const status = await membersBl.updateMemberById(id, member)
        res.status(200).json(status)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

module.exports = router