document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchTerm').value.toLowerCase();
    if (searchTerm.length > 0) {
        fetchMovies(searchTerm);
    } else {
        alert('Please enter a search term');
    }
});

function fetchMovies(searchTerm) {
    const apiKey = '7f6a4254';  
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                const filteredMovies = data.Search.filter(movie => movie.Title[0].toLowerCase() === searchTerm[0]);
                displayMovies(filteredMovies);
            } else {
                alert('No movies found!');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayMovies(movies) {
    const movieContainer = document.getElementById('movies');
    movieContainer.innerHTML = '';  

    if (movies.length === 0) {
        movieContainer.innerHTML = '<p>No movies found with that starting letter!</p>';
    } else {
        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.innerHTML = `
                <h3>${movie.Title}</h3>
                <p>Year: ${movie.Year}</p>
                <p>Type: ${movie.Type}</p>
                <img src="${movie.Poster}" alt="${movie.Title} poster" style="width: 100%; height: auto;" />
            `;
            movieContainer.appendChild(movieDiv);
        });
    }
}
