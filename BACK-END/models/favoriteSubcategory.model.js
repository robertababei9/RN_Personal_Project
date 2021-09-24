const mongoose = require("mongoose");

const FavoriteSubcategory = mongoose.model(
    "FavoriteSubcategory",
    new mongoose.Schema({
        SubcategoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subcategory"
        },
        UserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    })
);

module.exports = FavoriteSubcategory;