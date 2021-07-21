const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.route('/')
    .get(adminController.getFullName)
    .post(adminController.createName)

router.route('/:information')
    .get(adminController.getMobileNumber)
    .get(adminController.getEmail)
    .get(adminController.getBirthday
    .get(adminController.getGener))
    .patch(adminController.editAdmininformation)
    .delete(adminController.deleteAdmin)

module.exports = router