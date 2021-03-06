const { authJwt } = require("../middlewares");
const controller = require("../controllers/category.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.use(authJwt.verifyToken);


  app.get("/api/category", controller.getAll);

  app.post("/api/category", controller.create)

  app.get("/api/category/getCategorySubcategoryModel", controller.getCategorySubcategoryModel)

  app.delete("/api/category/:id", controller.delete);




//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );
};