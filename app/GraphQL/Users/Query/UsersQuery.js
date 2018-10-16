import {GraphQLList, GraphQLString} from "graphql";
import {User} from "../../../src/Users/Infrastructure/Users";
import UserType from "../Type/UsersType";

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
    type: new GraphQLList(UserType),
    args: {
        _id : {
            type: GraphQLString,
            name: '_id'
        }
    },
    async resolve (parentValue , args) {

        if (args._id){
            let id = args._id;

            return User.getById(id);
        }

        return User.all();
    }
}