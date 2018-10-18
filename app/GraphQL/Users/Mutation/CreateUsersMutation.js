import {GraphQLNonNull, GraphQLString} from "graphql";
import UserType from "../Type/UsersType";
import {UserCreate} from "../../../src/Users/Applications/UsersCreate";

/**
 *
 * Defining Default data Query of response
 * Using GraphQL Query you can define it into default query response
 * This query use to take data from database
 *
 * USERS QUERY
 *
 */

export default {
    type: UserType,
    description: "This Mutation use to create new users",
    args: {
        firstname: {
            type: GraphQLNonNull(GraphQLString),
            description: "this argument field to store firstname users, required"
        },
        lastname: {
            type: GraphQLNonNull(GraphQLString),
            description: "this argument field to store lastname users, required"
        },
        username: {
            type: GraphQLNonNull(GraphQLString),
            description: "this argument field to store username users, required"
        },
        password: {
            type: GraphQLNonNull(GraphQLString),
            description: "this argument field to store password users, required"
        },
        address: {
            type: GraphQLString,
            description: "this argument field to store address users"
        }
    },
    async resolve (parentValue , args) {

        return await UserCreate.store(args);

    }
}