const model, dataTypes = require('sequelize');
const Sequelize = require('../config/connection');

class Blog extends Mode {}

Blog.init(
    {
        id: {
            type: dataTypes.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        description: {
            type:dataTypes.STRING,
        },
        date_created: {
            type: dataTypes.DataTypes.DATE,
            allowNull: false,
            defaultValue: dataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER, 
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    }
);

module.exports = blog;