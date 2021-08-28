import Sequelize from 'sequelize';
import db from '../config/database';

const degree_program = db.define('degree_programs', {
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


export default degree_program;