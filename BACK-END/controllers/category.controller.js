const db = require("../models");

const Category = db.category;

exports.getAll = async (req, res) => {
    const categories = await Category.find({});

    try {
        res.send(categories);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.create = async (req, res) => {
    const category = new Category({
        name: req.body.name,
        description: req.body.description,
        CreatedDate: new Date(),
        AvatarIconName: req.body.avatarIconName
    });

    try {
        await category.save();
        res.send(category);
    } catch (error) {
        res.status(500).send(error);
    }
}

