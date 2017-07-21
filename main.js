const request = require('superagent');

const scores = [];

for(let i = 1; i < 51; i++) {
  const promise = request.get(`https://www.rottentomatoes.com/api/private/v2.0/browse?maxTomato=100&maxPopcorn=100&services=amazon%3Bhbo_go%3Bitunes%3Bnetflix_iw%3Bvudu%3Bamazon_prime%3Bfandango_now&genres=10&certified&sortBy=release&type=dvd-streaming-all&page=${i}`);
  scores.push(promise);
}

Promise.all(scores)
  .then(data => {
    const responses = [];
    data.forEach(res => {
      responses.push(res.body.results)
    })
    const movies = [].concat.apply([], responses);
    return movies;
  })
  .then(movies => {
    const scores = [];
    movies.forEach(movie => {
      scores.push(movie.tomatoScore);
    })
    const avg = scores.reduce((a, b) => a + b) / scores.length;
    console.log('avg: ', avg);
    console.log('number of movies: ', scores.length);
  });


