const db = require("../models");

const Category = db.category;
const Subcategory = db.subcategory;

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
        AvatarIconName: req.body.avatarIconName,
        Subcategories: []
    });

    try {
        await category.save();
        res.send(category);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.delete = async (req, res) => {
    
    try {
        const { id } = req.params;
        const category = await Category.find({_id: id});
        if (category.length == 0) {
            res.send(false);
            return;
        }
        const subCategoryIds = category[0].Subcategories;

        await Category.findByIdAndDelete(id);
        await Subcategory.deleteMany({
            _id: {
                $in: subCategoryIds
            }
        })

        res.send(true);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getCategorySubcategoryModel = async (req, res) => {
    const categories = await Category.find({}).populate("Subcategories");

    try {
        res.send(categories);
    } catch (error) {
        res.status(500).send(error);
    }
}

