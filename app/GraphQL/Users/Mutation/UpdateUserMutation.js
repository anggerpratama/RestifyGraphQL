import {GraphQLNonNull, GraphQLString} from 'graphql';
import UsersType from "../Type/UsersType";
import {UpdateUsers} from "../../../src/Users/Applications/UpdateUsers";

/**
 *
 * Defining Default data Mutation of response
 * Using GraphQL Mutation you can define it into default mutation response
 * This mutation use to delete data from database
 *
 * USERS MUTATION
 *
 */

export default {
    type: UsersType,
    description: "This Mutation use to update data exist users",
    args: {
        _id: {
            type: GraphQLNonNull(GraphQLString),
            description: "This argument use to find user want to update the data user , required"
        },
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
            type: GraphQLString,
            description: "this argument field to store password users, let it blank if not will change"
        },
        address: {
            type: GraphQLString,
            description: "this argument field to store address users"
        }
    },
    async resolve (parentValue , args){

        return UpdateUsers.update(args._id , args)

    }
}