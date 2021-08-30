import Sequelize from 'sequelize';
import db from '../config/database';
import section from './section';

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

grade_report.belongsTo(section, {
    foreignKey: 'section_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});


export default grade_report;