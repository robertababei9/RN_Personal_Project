const express  = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// DB connection
const db = require("./models");
const dbConfig = require("./config/db.config");
const Role = db.role;

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
        .then(() => {
            console.log("Successfully connect to MongoDB");
            initial();
        })
        .catch(err => {
            console.error("Connection error", err);
            process.exit();
          });

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("Added 'user' to roles collection");
            });

            new Role({
                name: "admin"
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
        
                console.log("Added 'admin' to roles collection");
              });
        }
    })
}

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Robert application." });
});

app.get("/test", (req, res) => {
    res.send("Test test test");
});
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/category.routes')(app);
require("./routes/subcategory.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });