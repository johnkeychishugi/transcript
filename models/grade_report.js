import Sequelize from 'sequelize';
import db from '../config/database';

const grade_report = db.define('grade_reports', {
    student_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    section_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    letter_grade: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    numeric_grade: {
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


export default grade_report;