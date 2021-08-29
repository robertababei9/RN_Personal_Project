const mongoose = require("mongoose");

const Category = mongoose.model(
    "Category",
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
        },
        CreatedDate: {
            type: Date,
            required: true
        },
        AvatarIconName: String
    })
);

module.exports = Category;