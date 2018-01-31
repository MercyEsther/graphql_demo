import {graphqlKoa, graphiqlKoa} from "apollo-server-koa";
const koaBody = require("koa-bodyparser");
const router = require("koa-router")();
import schema from "../graphql/schema";

router.post("/graphql", koaBody(), graphqlKoa({schema: schema}));
router.get("/graphql", graphqlKoa({schema: schema}));
router.get("/graphiql", graphiqlKoa({ endpointURL: '/graphql' }));

module.exports = router;