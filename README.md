# my-movies-app

A simple react native project that consists of:
1) A home page with a list of favourite movies/show, and a search header to navigate to search screen.
2) Click the movie/show to navigate to the entity's page. There you can see the basic info of the entity.
   1) Poster image
   2) Title
   3) Description
   4) Rating & Number of votes
   5) Favourite button with the appropriate functionality.
3) At search screen you can search using the [imdb's API](https://imdb-api.com/api), and then click to navigate to the entity's page.
4) Recent searches are saved locally and can be chosen by the user in the suggestion list.
5) Hide entities from search results.

## Notes
- Imdb api doesn't have pagination, thus no infinite scroll was implemented on the search list.
- The api allows 100 requests per day per api key. There are 2 api keys in the env file that can be used to test the project.
- The rating of each movie is appeared on the top right as a pill when we are in a list.
  - This is possible by saving the whole entity into favourites.
  - In search list this is not possible, because imdb's api will not return the rating for each 'Title'.
- Uses styled-components
- Tested on iOS devices.

## Environment
```shell
"npm": "8.11.0", # Globally installed
"node": "^16", # Globally installed
"yarn": "1.22.19", # Globally installed
"react": "18.2.0",
"react-native": "0.72.3",
```

## Install dependencies

```shell
nvm use 16
npm install --global yarn # Or use npx before each yarn command

# Install dependencies, start metro bundler and build app
yarn clean-start
# click `i` to run iOS or run the following command
yarn ios # Will run application to latest iPhone mini simulator
```

## App functionality

### Home screen
![Home screen](screenshots/1.png)
### Search screen
![Search screen](screenshots/2.png)
### Results
![Results](screenshots/3.png)
### Movie details screen
![Movie details screen](screenshots/4.png)
