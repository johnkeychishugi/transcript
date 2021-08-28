import Sequelize from 'sequelize';
import db from '../config/database';

const department = db.define('departments', {
    office_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    code: {
        type: Sequelize.NUMBER,
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


export default department;