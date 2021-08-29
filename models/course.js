import Sequelize from 'sequelize';
import db from '../config/database';
import department from './department';

const course = db.define('courses', {
    department_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    number_semester_hours: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    level: {
        type: Sequelize.TEXT,
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

course.belongsTo(department, {
    foreignKey: 'department_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});


export default course;