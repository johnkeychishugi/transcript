import Sequelize from 'sequelize';
import db from '../config/database';

const office = db.define('offices', {
    name: {
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