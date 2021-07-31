const sequilize = require('../config/connection');
const { User, Blog } = require('../models');
const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
    await sequilize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const blog of blogData) {
        await Blog.create(blog);
    }

    process.exit(0);
};

seedDatabase();