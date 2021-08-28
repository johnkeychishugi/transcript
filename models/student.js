import Sequelize from 'sequelize';
import db from '../config/database';

const student = db.define('students', {
    class_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    degree_program_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    ssn: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    phone_number: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    birthday: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    sex: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    major_department: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    minor_department: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    current_address: {
        type: Sequelize.STRING,
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


export default student;