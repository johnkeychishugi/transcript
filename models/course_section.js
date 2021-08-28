import Sequelize from 'sequelize';
import db from '../config/database';

const course_section = db.define('courses_sections', {
    course_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    section_id: {
        type: Sequelize.INTEGER,
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


export default course_section;