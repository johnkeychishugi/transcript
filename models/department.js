import Sequelize from 'sequelize';
import db from '../config/database';
import office from './office';

const department = db.define('departments', {
    office_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    code: {
        type: Sequelize.NUMBER,
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

department.belongsTo(office, {
    foreignKey: 'office_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});



export default department;