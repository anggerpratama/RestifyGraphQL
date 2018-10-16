import {GraphQLObjectType, GraphQLString} from "graphql";

/**
 *
 * Defining Default data Type of response
 * Using GraphQL Type you can define it into default type response
 *
 * USERS TYPE
 *
 */

export default new GraphQLObjectType({
    name:"UserType",
    fields: {
        _id: {
            type: GraphQLString,
            description: "This unique ids"
        },
        firstname: {
            type: GraphQLString,
            description: 'Field response of users firstname'
        },
        lastname: {
            type: GraphQLString,
            description: 'field response of users lastname'
        },
        address: {
            type: GraphQLString,
            description: 'address users fields response'
        }
    }
});