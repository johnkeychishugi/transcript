import Sequelize from 'sequelize';
import db from '../config/database';

const instructor = db.define('instructors', {
    name: {
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


export default instructor;