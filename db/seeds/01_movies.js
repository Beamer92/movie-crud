exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Star Wars: A New Hope', director: 'George Lucas', year: 1977, rating: 4, poster: 'https://images-na.ssl-images-amazon.com/images/I/91p5xxK95UL._SY445_.jpg'},
        {id: 2, title: 'Star Wars: The Empire Strikes Back', director: 'George Lucas', year: 1980, rating: 5, poster: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'},
        {id: 3, title: 'Star Wars: Return of the Jedi', director: 'George Lucas', year: 1983, rating: 4, poster: 'https://images-na.ssl-images-amazon.com/images/I/51UdiBUkerL.jpg'}
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));`)
    })
};
