# Dat-Band

A full stack web application for music fans to find information related to bands, albums and musicians.

## Technologies Used

* React
* JavaScript
* Node.js
* Express
* PostgreSQL
* Bootstrap 5
* CSS3
* HTML5

## Live Demo

Currently not available.

## Features

### Current:

User can search for a band, album or musician
user can see a list of results according to the search input
User can click on a result and be redirected to the selected page
User can see a dedicated page of the selected band, album or musician
User can click on link to other pages within the current page
User can watch YouTube videos within the Band page

### Future:

User can search for albums by release year
User can search for bands by music genre

## Lessons Learned

This project helped me solidify my knowledge on React and how to create effective reusable code. 

## Development

### Getting Started

1. Clone the repository.

    ```shell
    git clone https://github.com/luccarizzi/dat-band
    cd dat-band
    ```

1. Install all dependencies with NPM.

    ```shell
    npm install
    ```
    
1. Import the example database to MongoDB.

    ```shell
    sudo service postgresql start
    npm run db:import
    ```

1. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```
