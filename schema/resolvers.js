// const {res} = require('apollo-server');
const {UserList,MovieList} = require("../simpleData");
const _ = require('lodash');


const resolvers =  {
        Query:{
            users:()=>{
                return UserList
            },
            findUser:(parent,arg)=>{
                console.log(arg);
                const user = _.find(UserList,{id:Number(arg.id)})
                return user
            },
            getMovies:()=>{
                const movies = MovieList
                return movies
            }
        } ,
         Mutation:{
            getMovieById:(parent,args)=>{
                console.log(args);
                const movie = _.find(MovieList,mov=>mov.id ===Number(args.input.id))
                return movie
            },
            updateMovieName:(parent,args)=>{
                let movie = _.find(MovieList,mov=>mov.name === args.input.oldName)
                movie.name = args.input.newName;
                _.replace(movie.id,movie);
                return movie
            }

        }
        

    }


module.exports ={resolvers}