import {GraphQLNonNull, GraphQLString} from "graphql";
import AuthType from '../Type/AuthType';
import {Authentication} from "../../../src/Auth/Application/Authentication";

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
    type: AuthType,
    description: "This Mutation use to login to access some feature",
    args: {
        username: {
            type: GraphQLNonNull(GraphQLString),
            description: "this argument field to store username users, required"
        },
        password: {
            type: GraphQLNonNull(GraphQLString),
            description: "this argument field to store password users, required"
        }
    },
    async resolve (parentValue , args) {

        return await Authentication.loginUsers(args);

    }
}