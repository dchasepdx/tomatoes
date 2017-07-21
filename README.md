# tomatoes
A simple script to grab rotten tomatoes ratings from all movies of a certain genre.
To run the script: 
1. `git clone` the repo and `npm install` to install dependencies.
2. in `main.js` change the url string to find all movies in your chosen genre. Look for `genre=10` query parameter.
3. genres correspond with a number as follows: 
  ```
  Animation = 2
  Art & foreign = 4
  Classics = 5
  Comedy = 6
  Documentary = 8
  Drama = 9
  Horror = 10
  Kids and family = 11
  Mystery = 13
  Romance = 18
  Sci fi & fantasy = 14
  ```
4. run with node in the terminal `$ node main.js`
5. output will be an average rating for all films of a given genre, and the number of movies rated
