import Sequelize from 'sequelize';
import db from '../config/database';

const comment = db.define('comments', {
    created: {
        type: Sequelize.DATE,
        allowNull: false
    },
    modified: {
        type: Sequelize.DATE,
        allowNull: false
    },
    deleted: {
        type: Sequelize.DATE,
        allowNull: true
    },
    artwork_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    activated: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    created_by: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comment: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    pseudo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});


export default comment;