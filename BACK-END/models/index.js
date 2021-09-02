const mongoose = require('mongoose');

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.category = require("./category.model");
db.subcategory = require("./subcategory.model");

db.ROLES = ["user", "admin"];

module.exports = db;