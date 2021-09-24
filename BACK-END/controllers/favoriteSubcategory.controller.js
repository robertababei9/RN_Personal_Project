const db = require("../models");


const FavoriteSubcategory = db.favoriteSubcategory;

exports.getByUserId = async (req, res) => {
    try {
        const favorites = await FavoriteSubcategory.find({
            UserId: req.params.userId
        });
    
        // console.log("_____ favorites _____ : ", favorites);
        res.send(favorites);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.create = async (req, res) => {
    const favorite = new FavoriteSubcategory({
        SubcategoryId: req.body.productId,
        UserId: req.body.userId,
    });

    try {
        await favorite.save();
        res.send(favorite);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.delete = async (req, res) => {
    
    try {
        const { id } = req.params;
        const success = await FavoriteSubcategory
                .findByIdAndDelete(id);

        if (!success) res.send(false);


        res.send(true);
    } catch (error) {
        res.status(500).send(error);
    }
}