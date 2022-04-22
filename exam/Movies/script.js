

function fetchMovie(apiKey = '3f951fde1f94ff23e3aebbd24b292474') {
    
    let resultSearch = document.getElementById('resultSearch');

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=1`)
        .then(response => response.json())
        .then(movies => {
            console.log(movies);
            movies.results.forEach(movie => {
                const image = document.createElement('img');
                const movieTitle = document.createElement("h2");
                image.src = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+movie.poster_path
                movieTitle.src = "https://www.themoviedb.org/movie/414906-the-batman"+movie.title_path
                resultSearch.appendChild(image);
                resultSearch.appendChild(movieTitle);
            });
        })
        .catch(err => console.log(err));
}

