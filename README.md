## Movie Search App Documentation

This documentation explains the code structure and functionality of the Movie Search application, built with HTML, CSS and JavaScript.

### 1. Files:

- **index.html:** The main HTML file responsible for structuring the web page.
- **style.css:** Provides the visual styling for the application.
- **app.js:** Contains the JavaScript logic for handling user interactions and fetching movie data.

### 2. index.html:

**Structure:**

- **DOCTYPE html:**  Specifies the HTML version (HTML5).
- **html tag:**  The root element of the document.
- **head tag:** Contains metadata about the document:
    - **meta charset:**  Specifies the character encoding (UTF-8).
    - **meta viewport:**  Sets the viewport for responsiveness.
    - **title:**  Sets the title of the webpage.
    - **link rel="stylesheet"**: Links the external stylesheet (style.css).
- **body tag:** Contains the visible content of the web page:
    - **h1:** The main heading of the app ("Movie Search").
    - **input type="text" id="searchTerm"**: The search input field for the user.
    - **button id="searchButton"**: The button to trigger the search.
    - **div id="movies"**: The container where the search results (movie information) will be displayed.
    - **script src="app.js"**:  Links the external JavaScript file (app.js).

### 3. style.css:

**Styling:**

- **body:**  Sets general styles for the page, including font, text alignment, background image (a movie-themed background),  padding, and margin.
- **h1:**  Styles the main heading (sets the color).
- **#movies:** Defines the display style for the movie container (flexbox for responsive arrangement).
- **.movie:** Styles each movie card (border, margin, padding, background color, border-radius, box-shadow, text alignment).
- **.movie img:**  Styles images within movie cards (border-radius, width, height).
- **Media Queries:** Applies styles for different screen sizes to ensure responsive layout (adjusting card width for larger screens).

### 4. app.js:

**Functionality:**

- **Event Listener:**  An event listener is added to the "searchButton" to execute code when the button is clicked.
- **fetchMovies function:**
    - Retrieves the search term entered by the user.
    - Makes an API request to the OMDB API (www.omdbapi.com) using the provided API key ('7f6a4254') and the search term.
    - Filters the API response to include only movies whose title starts with the same letter as the search term.
    - Calls the `displayMovies` function to present the search results.
- **displayMovies function:**
    - Clears the existing movie display content.
    - If no movies are found (or the search term is invalid), it displays a message indicating that.
    - Otherwise, it iterates over each movie in the results array and dynamically creates HTML elements for each movie card.
    - Appends each movie card to the `movies` container.

### 5. Key Points:

- **OMDB API:**  The application utilizes the OMDB API (Open Movie Database API) to retrieve movie information.
- **API Key:**  The API key ('7f6a4254') is required to access the OMDB API.
- **Search Functionality:**  The application allows the user to search for movies by entering a letter.
- **Dynamic Content:**  Movie information is dynamically generated and displayed based on the search results.
- **Responsive Design:** The layout adjusts based on screen size using media queries in the CSS.

### 6. To Run the App:

1. Create a new folder and place the three files (index.html, style.css, and app.js) inside.
2. Open the index.html file in a web browser.
3. Enter a letter in the search input field and click the "Search" button to view the movie results.

This documentation provides a comprehensive understanding of the Movie Search app. The code is well-structured and comments are included to enhance readability.
