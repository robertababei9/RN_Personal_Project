const { authJwt } = require("../middlewares");
const controller = require("../controllers/subcategory.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.use(authJwt.verifyToken);


  app.get("/api/subcategory", controller.getAll);

  app.post("/api/subcategory", controller.create)


//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );
};