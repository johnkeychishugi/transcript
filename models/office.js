import Sequelize from 'sequelize';
import db from '../config/database';

const office = db.define('offices', {
    number: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    phone_number: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    created_at: {
        type: Sequelize.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});


export default office;