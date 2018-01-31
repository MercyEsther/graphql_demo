import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList
} from "graphql";

const productsType = new GraphQLObjectType({
    name: "products",
    fields:{
        id:{
            type: GraphQLString
        },
        create_date:{
            type: GraphQLString
        },
        default_code:{
            type: GraphQLString
        },
        create_uid:{
            type: GraphQLString
        },
        barcode:{
            type: GraphQLString
        },
        active:{
            type: GraphQLBoolean
        },
        name:{
            type: GraphQLString
        },
        product_code:{
            type: GraphQLString
        },
        short_desc:{
            type: GraphQLString
        },
        unit_price:{
            type: GraphQLString
        },
        display_name:{
            type: GraphQLString
        },
        sale_ok:{
            type: GraphQLBoolean
        }
    }
})

export const products = {
    type: new GraphQLList(productsType),
    args:{
        sale_ok: {
            type: GraphQLBoolean
        },
        id: {
            name: "id",
            type: GraphQLInt
        },
        name: {
            name: "name",
            type: GraphQLString
        }
    },
    resolve(root, params, options){
        if(Object.keys(params).length != 0){
            return Database.findOne("product_product", params.id);
        }
        else{
            return Database.fetchAll("product_product");
        }
    }
}

export const product = {
    type: productsType,
    args: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        }
    },
    resolve(root, params, options){
        let id = params.id;
        console.log("id",id);
        return Database.findOne("product_product", id);
    }
}