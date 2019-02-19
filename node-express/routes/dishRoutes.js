const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json())

dishRouter.route("/")
.all((req,res,next) => {
  
res.statusCode = 200; 
res.setHeader('Content-Type','text/plain');
next();
})
.get((req,res,next) => {
  res.end("get ");
})
.post((req,res,next) => {
res.end('post ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

dishRouter.route("/:dishId")
.all( (req,res,next) => {
  res.statusCode = 200; 
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req,res,next) => {
  res.end("get " + req.params.dishId);
});

module.exports = dishRouter;