const { authJwt } = require("../middlewares");
const controller = require("../controllers/favoriteSubcategory.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.use(authJwt.verifyToken);


  app.get("/api/favoriteSubcategory/getByUserId/:userId", controller.getByUserId);

  app.post("/api/favoriteSubcategory", controller.create);

  app.delete("/api/favoriteSubcategory/:id", controller.delete);

};