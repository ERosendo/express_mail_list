const sequelize = require("../../libs/sequelize");

module.exports.create = async (req, res, next) => {
    const { email } = req.body;
    try {
        const exiting_mail = await sequelize.models.Mail.findOne({ where: { email }});
        if (!exiting_mail){
            const mail = await sequelize.models.Mail.create({ email: email })
        }
    } catch (error) {
        res.status(500).json({ status: 'error' })
        return
    }

    return res.json({ status: 'ok' });
}

module.exports.list = async (req, res, next) => {
  
    return res.json({ status: 'ok' });
}