This is a project where I learned how to make my own backend and connect it to the frontend.
# The FRONTEND part; Project Mongo API
This is a React application that displays a list of characters from the Harry Potter series. The data is fetched from an external API (https://project-mongo-api-pb7rmnzmyq-lz.a.run.app) and rendered on the page. Users can also view additional information about the Patronus of each character by clicking on their respective Patronus.

The "Characters" component is the main part of the application. It is responsible for fetching character data from the API, rendering the characters on the page, and handling interactions related to the Patronus information.

The "Spells" component is a React application that fetches and displays a list of spells from the Harry Potter series. The component communicates with an external API to retrieve the spell data and renders it on the page. While the data is being fetched, a loading indicator is displayed to provide feedback to the user.
The component uses the useState hook to create two state variables, isLoading and spells. isLoading is used to track whether the data is still being fetched from the API, and spells is used to store the array of spell objects retrieved from the API.
The useEffect hook is used to fetch data from the specified API endpoint when the component mounts. The fetchData function makes an asynchronous API call using axios.get() to get the list of spells. If the request is successful, the response data is stored in the spells state variable, and isLoading is set to false, indicating that the data has been loaded. If an error occurs during the API call, the error is logged to the console, and isLoading is also set to false.
The component renders a heading "All spells" and conditionally renders either the Loading component or the list of spells based on the value of isLoading. If isLoading is true, the Loading component is displayed to provide feedback to the user while the data is being fetched. Once the data is available and isLoading is false, the spell information is displayed using the map function to iterate over the spells array and render each spell's name, effect, and incantation.
This code fetches spell data from an external API, shows a loading indicator while the data is being fetched, and then displays the list of spells on the page. Ensure that the axios library is installed and that the URL for the API endpoint is correct for the code to function properly.

The "Search" component is a React application that allows users to search for characters from the Harry Potter series. It provides a search input field where users can enter the name of a character they want to find. When the search button is clicked, the component sends a request to an external API to fetch the characters matching the search term. The search results are then displayed below the search form.

The handleSearch function is called when the user submits the search form. It makes an asynchronous API call to fetch characters whose names match the searchTerm from the API endpoint. If the request is successful, the response data containing the matching characters is stored in the characters state variable. If an error occurs during the API call, the error is logged to the console, and the characters state is set to an empty array to clear any previous search results.

The component renders a search form containing an input field, a "Search" button, and a "Reset" button. The searchTerm state is bound to the input field value, and any changes in the input field will update the searchTerm state accordingly.

If the characters array is not empty (i.e., there are search results), the search results are displayed in a list below the search form. Each character's information, such as name, species, gender, house, Patronus, and wand details, is rendered using the map function.

This code creates a character search component that interacts with an external API to fetch and display character information based on the user's search query. Ensure that the axios library is installed and that the API endpoint URL is correct for the code to function properly.

## View it live
frontend:
https://stunning-brioche-6e0c54.netlify.app/
backend:
https://project-mongo-api-pb7rmnzmyq-lz.a.run.app

# The BACKEND part; Project Mongo API
(https://github.com/NinaWald/project-mongo-api)
This weeks project was about learning how to work with MongoDB , Compass, Atlas, Google Cloud.
✓ Your API should have at least 2 routes. Try to push yourself to do more, though!
✓ A minimum of one endpoint to return a **collection** of results (array of elements).
✓ A minimum of one endpoint to return a **single** result (single element).
✓ Your API should make use of Mongoose models to model your data and use these models to fetch data from the database.
✓ Your API should be [RESTful]
## What you will learn
✓ What MongoDB is
✓ How to model data in Mongo using Mongoose
✓ How to store secret information such as database passwords
✓ How to return useful error messages from your API endpoints
✓ How to fetch items from a Mongo database using Mongoose
✓ How to seed large amounts of data to a database

## The problem
I downloaded some CVSfile from Kaggle (Harry Potter info) and converted in into JSON (https://csvjson.com/)
Then I used it in my code in the data file as spells.js and characters.js.

The code in the project makes use of Mongoose models to model your data and fetch data from the database.
I define two schemas using mongoose.Schema(): charactersSchema and spellsSchema. Then, I create Mongoose models for each schema using mongoose.model(): Characters and Spells.

In the routes, I use these models to fetch data from the MongoDB database. For example, in the /characters/ID/:ID route, I use Characters.findById() to fetch a single character from the database based on its ID. In the /characters/name/:name route, I use Characters.find() to search for all characters whose names match a given string.

Therefore, my API uses Mongoose models to model your data and fetch data from the database.

/characters endpoint returns a collection of results (array of elements) containing all characters from Harry Potter Movies.
/characters/ID/:ID endpoint returns a single result (single element) based on the ID of the character.
/characters/name/:name endpoint returns a collection of results (array of elements) containing all characters that match the name passed in the request parameter.
/spells endpoint returns a collection of results (array of elements) containing all spells from Harry Potter Movies.

Seeding a database process:
The if statement checking for process.env.RESET_DATABASE triggers the seeding process if the environment variable RESET_DATABASE is set to a truthy value. Within the resetDatabase function, the deleteMany method is called on both Characters and Spells models to remove any existing documents in their respective collections. Then, the insertMany method is called on the Characters model to insert documents from the charactersPotter array, and the insertMany method is called on the Spells model to insert documents from the spellsPotter array. This process populates the database with data before starting the server.


    Endpoints that i created:
        "/characters": "Display all Characters from Harry Potter Movies",
        "/characters/ID/:ID": "Search specific Character id",
        "/characters/name/:name": "Search for a name in Harry Potter Movies",
        "/spells": "Display all spells"

















# Technigo React Starter App

This app has been generated using `create-react-app`, then cleaned up a little so we have a project with just the elements we need to get started.

Add components in the `src` folder and use them in `src/app.js` to get started.

## Usage

1. On GitHub, click the 'use this template' button to create a new repo on your account
1. Clone the new repo to your computer
1. Install required dependencies with npm: `npm install`
1. Start the project: `npm start`

Alternatively, if you don't want a new git repo on your account;

1. Download & extract the [latest release](https://github.com/Technigo/react-starter/releases/latest) from GitHub
1. Open the directory in the terminal: `cd /path/to/react-starter`
1. Install required dependencies with npm: `npm install`
1. Start the project: `npm start`
