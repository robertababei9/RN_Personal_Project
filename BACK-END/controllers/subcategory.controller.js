const db = require("../models");

const Subcategory = db.subcategory;
const Category = db.category;

exports.getAll = async (req, res) => {
    const subcategories = await Subcategory.find({});

    try {
        res.send(subcategories);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.create = async (req, res) => {
    const category_id = req.body.category_id;

    const subcategory = new Subcategory({
        Name: req.body.name,
        Description: req.body.description,
        Price: req.body.price,
        CreatedDate: new Date(),
    });

    try {
        await subcategory.save();

        await Category.findByIdAndUpdate(
            category_id, 
            { $push: { Subcategories: subcategory._id}},
            { useFindAndModify: false}
        )

        res.send(subcategory);
    } catch (error) {
        res.status(500).send(error);
    }
}

