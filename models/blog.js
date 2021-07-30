const { Model, DataTypes } = require('sequelize');
const sequilize = require('../config/connection');
const { User } = require('../models');

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER, 
            references: {
                model: User,
                key: 'id',
            },
        },
    },
    {
        sequilize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    }
);

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = Blog;