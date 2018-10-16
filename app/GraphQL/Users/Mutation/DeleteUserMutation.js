import {GraphQLNonNull, GraphQLString} from "graphql";
import UserType from "../Type/UsersType";
import {DeleteUser} from "../../../src/Users/Applications/DeleteUser";

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
    type: UserType,
    description: "This Mutation use to delete exist users",
    args: {
        _id: {
            type: GraphQLNonNull(GraphQLString),
            description: "this argument field to delete users by their id, required"
        }
    },
    async resolve (parentValue , args) {

        return DeleteUser.destroy(args._id);

    }
}