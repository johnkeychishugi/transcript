import Sequelize from 'sequelize';
import db from '../config/database';
import classe from './class';
import degree_program from './degree_program';
import grade_report from './grade_report';

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

student.belongsTo(classe, {
    foreignKey: 'class_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

student.belongsTo(degree_program, {
    foreignKey: 'degree_program_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

student.hasOne(grade_report, {
    foreignKey: 'student_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

grade_report.belongsTo(student, {
    foreignKey: 'student_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});


export default student;