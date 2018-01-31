import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} from "graphql";

const voucherType = new GraphQLObjectType({
    name: "voucher",
    fields:{
        id:{
            type: GraphQLInt
        },
        code:{
            type: GraphQLString
        },
        user_id:{
            type: GraphQLInt
        },
        name:{
            type: GraphQLString
        },
        amount:{
            type: GraphQLInt
        }
    }
})

export const vouchers = {
    type: new GraphQLList(voucherType),
    resolve(root, params, options){
        return Database.fetchAll("vouchers");
    }
}


