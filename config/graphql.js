import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import UserQuery from '../app/GraphQL/Users/Query/UsersQuery';
import UserMutation from '../app/GraphQL/Users/Mutation/CreateUsersMutation';
import DeleteUserMutation from '../app/GraphQL/Users/Mutation/DeleteUserMutation';
import UpdateUserMutation from "../app/GraphQL/Users/Mutation/UpdateUserMutation";

/*
|--------------------------------------------------------------------------
| Query Config
|--------------------------------------------------------------------------
|
| Define all graphQL Queries in yours Application
| It will apply all queries after you define it in this section
|
| Add yours Queries at this section
|
| fields: {
|     users: UserQuery
| }
|
*/

const RootQuery = new GraphQLObjectType({
    name: 'QueriesRoot',
    fields: {
        users: UserQuery
    }
});

/*
|--------------------------------------------------------------------------
| Mutation Config
|--------------------------------------------------------------------------
|
| Define all graphQL Mutations in yours Application
| It will apply all Mutations after you define it in this section
|
| Add yours Mutations at this section
|
| fields: {
|     users: UserMutation
| }
|
*/

const RootMutation = new GraphQLObjectType({
    name: 'MutationsRoot',
    fields: {
        create_user: UserMutation,
        delete_user: DeleteUserMutation,
        update_user: UpdateUserMutation
    }
});

    /*
    |--------------------------------------------------------------------------
    | GraphQL Schema
    |--------------------------------------------------------------------------
    |
    | It will apply all of registered queries in your application
    | And will be added into GraphiQL and you can tested in
    |
    |
    */


export default new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})
