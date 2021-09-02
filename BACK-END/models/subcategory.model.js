const mongoose = require("mongoose");

const Subcategory = mongoose.model(
    "Subcategory",
    new mongoose.Schema({
        Name: {
            type: String,
            required: true,
            trim: true
        },
        Description: {
            type: String,
        },
        Price: {
            type: Number,
            required: true,
        },
        CreatedDate: {
            type: Date,
            required: true
        },
    })
);

module.exports = Subcategory;