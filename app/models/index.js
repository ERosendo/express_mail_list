const { Mail, MailSchema } = require('./mail.model');

function setupModels(sequelize) {
    Mail.init(MailSchema, Mail.config(sequelize));
}

module.exports = setupModels