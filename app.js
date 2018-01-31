const Koa = require("koa");
const router = require("koa-router")();
const Database = require("./database/Orm");
var app = new Koa();
global.Database = new Database();

const graphqlRouter = require("./router");

app.use(graphqlRouter.routes());

app.listen(8888);
console.log("server is running on 8888");

