const express = require('express')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
require('dotenv').config({  
  path: process.env.NODE_ENV === "test" ? 
      ".env.testing" : 
      process.env.NODE_ENV === "production" ? 
          ".env.production" : 
          ".env"
})
const sales = require('./routes/sales')

const app = express()
app.use(fileUpload())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET','POST','DELETE','PUT']
}));

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Coodesh challenge",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        }
      },
      servers: [
        {
          url: "http://localhost:5000",
        },
      ],
    },
    apis: ["./routes/*.js"],
};
  
const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  	extended: true
})); 

app.get('/', function(req, res) {
  	res.send('Coodesh challenge');
});

app.use('/api', sales)

// default response:
app.use((req, res) => {
    res.status(404)
})

module.exports = app