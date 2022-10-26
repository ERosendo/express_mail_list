const { Model, DataTypes, Sequelize } = require('sequelize')

const MAIL_TABLE = 'mails';

const MailSchema = {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        },
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW,
    },
    deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'deleted_at',
    },
}

const MailHooks = {
}

class Mail extends Model {
    static associate() {
    }

    static config(sequelize) {
        return {
            hooks: MailHooks,
            sequelize,
            tableName: MAIL_TABLE,
            modelName: 'Mail',
            timestamps: false,
        }
    }
}

module.exports = { MAIL_TABLE, MailSchema, MailHooks, Mail }