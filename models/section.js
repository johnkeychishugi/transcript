import Sequelize from 'sequelize';
import db from '../config/database';

const section = db.define('sections', {
    instructor_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    semester: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    year: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    room_number: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    building: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    created_at: {
        type: Sequelize.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});


export default section;