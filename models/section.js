import Sequelize from 'sequelize';
import db from '../config/database';
import instructor from './instructor';
import course from './course';

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

section.belongsTo(instructor, {
    foreignKey: 'instructor_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

section.belongsToMany(course, {
    through: "courses_sections",
    as: "courses",
    foreignKey: "section_id",
  });
  
  course.belongsToMany(section, {
    through: "courses_sections",
    as: "sections",
    foreignKey: "course_id",
  });


export default section;