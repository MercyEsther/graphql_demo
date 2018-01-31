import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLSchema
} from "graphql";
import {vouchers} from "./vouchers";
import {products, product} from "./products";

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "query",
        fields:{
            vouchers,
            products,
            product
        }
    })
})



