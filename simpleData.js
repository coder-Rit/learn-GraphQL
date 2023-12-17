exports.UserList = [
    {
      id: 1,
      name: "John",
      username: "john",
      age: 20,
      nationality: "CANADA",
      friends: [
        {
          id: 2,
          name: "Pedro",
          username: "PedroTech",
          age: 20,
          nationality: "BRAZIL",
        },
        {
          id: 5,
          name: "Kelly",
          username: "kelly2019",
          age: 5,
          nationality: "CHILE",
        },
      ],
    },
    {
      id: 2,
      name: "Pedro",
      username: "PedroTech",
      age: 20,
      nationality: "BRAZIL",
    },
    {
      id: 3,
      name: "Sarah",
      username: "cameron",
      age: 25,
      nationality: "INDIA",
      friends: [
        {
          id: 2,
          name: "Pedro",
          username: "PedroTech",
          age: 20,
          nationality: "BRAZIL",
        },
      ],
    },
    {
      id: 4,
      name: "Rafe",
      username: "rafe123",
      age: 60,
      nationality: "GERMANY",
    },
    {
      id: 5,
      name: "Kelly",
      username: "kelly2019",
      age: 5,
      nationality: "CHILE",
    },
  ];
  
  exports.MovieList = [
    {
      id: 1,
      name: "Avengers Endgame",
      yearOfPublication: 2019,
      isInTheaters: true,
      usersLikeList:[3]
    },
    {
      id: 2,
      name: "Interstellar",
      yearOfPublication: 2007,
      isInTheaters: true,
      usersLikeList:[1,2]
    },
    {
      id: 3,
      name: "Superbad",
      yearOfPublication: 2009,
      isInTheaters: true,
      usersLikeList:[1]
    },
    {
      id: 4,
      name: "PedroTech The Movie",
      yearOfPublication: 2035,
      isInTheaters: false,
      usersLikeList:[]
    },
  ];