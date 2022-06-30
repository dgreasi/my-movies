# my-movies-app

A simple react native project that consists of:
1) A home page with a list of favourite movies/show, and a search header to navigate to search screen.
2) Click the movie/show to navigate to the entity's page. There you can see the basic info of the entity.
   1) Poster image
   2) Title
   3) Description
   4) Rating & Number of votes
   5) Favourite button with the appropriate functionality.
3) At search screen you can search using the imdb's API, and then click to navigate to the entity's page.
4) Recent searches are saved locally and can be chosen by the user in the suggestion list.

## Environment
```shell
"npm": "8.11.0", # Globally installed
"node": "^16", # Globally installed
"yarn": "1.22.19", # Globally installed
"react-native": "^0.68.2",
"react": "^17.0.2",
```

## Install dependencies

```shell
nvm use 16
npm install --global yarn # Or use npx before each yarn command

# Install dependencies, start metro bundler and build app
yarn clean-start
yarn iosmini # Will run application to latest iPhone mini simulator
```
