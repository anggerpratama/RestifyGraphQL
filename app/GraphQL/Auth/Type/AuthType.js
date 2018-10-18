import {GraphQLObjectType, GraphQLString} from "graphql";

/**
 *
 * Defining Default data Type of response
 * Using GraphQL Type you can define it into default type response
 *
 * AUTH TYPE
 *
 */

export default new GraphQLObjectType({
    name:"AuthType",
    fields: {
        username:{
            type: GraphQLString,
            description: "This username of users"
        },
        token: {
            type: GraphQLString,
            description: "This unique token access"
        }
    }
});