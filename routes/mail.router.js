const express = require('express');

const MailController = require('../app/controllers/mail.controller')

const router = express.Router();

router.get('/',
    MailController.list
)

router.post('/',
    MailController.create
);

module.exports = router;