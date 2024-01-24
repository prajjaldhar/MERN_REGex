const movies = [
  {
    id: 1,
    name: "Inception",
    description: "A thief who enters people's dreams to steal their secrets.",
    year: 2010,
  },
  {
    id: 2,
    name: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    year: 1994,
  },
  {
    id: 3,
    name: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    year: 1994,
  },
];

movies.map((movie) => {
  console.log(`ID: ${movie.id}`);
  console.log(`Name: ${movie.name}`);
  console.log(`Description: ${movie.description}`);
  console.log(`Year of Release: ${movie.year}`);
  console.log("---------------------");
  // console.log(movie);
});
