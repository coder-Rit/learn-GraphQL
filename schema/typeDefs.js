const {gql} = require('apollo-server');


const typeDefs = gql`

    type user {
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:String
        friends:[user] 
    }

    type Query{
        users:[user!]!
        findUser(id:ID!):user
        getMovies:[Movie!]!
    }

    type Movie{
        id:ID!
        name:String!
        yearOfPublication:Int!
        isInTheaters:Boolean!
        usersLikeList:[ID]
    }

    input moviesInput {
        id:ID
    }
    input findMovieByName{
        oldName:String
        newName:String
    }

    type Mutation  {
        getMovieById(input:moviesInput):Movie!
        updateMovieName(input:findMovieByName):Movie!
    }

     
 
`


module.exports = {typeDefs} 