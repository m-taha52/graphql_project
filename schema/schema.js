const graphql = require("graphql")

const { GraphQLObjectType, GraphQLString,  GraphQLSchema } = graphql

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent,args) {
                //code to get the data from database/other source
            }
        }
    }
})

module.exports = new GraphQLSchema({



})

//schema file has 3 responsibilities
//1. Define the data type
//2. Define the relationshiop between data types
//3. Define the root query, root query is the entry point to the data
