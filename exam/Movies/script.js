window.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById("rechercher").addEventListener("click", () => {
        fetchMovie();
    });
});

function fetchMovie(apiKey = '3f951fde1f94ff23e3aebbd24b292474') {
    let search =  document.getElementById('search').value || 'default';
    let limit =  document.getElementById('limit').value || 10;
    let resultSearch = document.getElementById('resultSearch');

    fetch(`https://g.tenor.com/v1/search?q=${search}&key=${apiKey}&limit=${limit}`)
        .then(response => response.json())
        .then(movies => {
            console.log(movies);
            movies.results.forEach(movie => {
                const image = document.createElement('img');
                image.src = `${movie.itemurl}.movie`;
                resultSearch.appendChild(image);
            });
        })
        .catch(err => console.log(err));
}

async function fetchMovieAsync(apiKey = '3f951fde1f94ff23e3aebbd24b292474') {
    let search =  document.getElementById('search').value || 'default';
    let limit =  document.getElementById('limit').value || 10;
    let resultSearch = document.getElementById('resultSearch');

    const movies = await fetch(`https://g.tenor.com/v1/search?q=${search}&key=${apiKey}&limit=${limit}`)
        .then(response => response.json())
        .then(movies => movies.results);

    movies.forEach(movie => {
        const image = document.createElement('img');
        image.src = `${movie.itemurl}.movie`;
        resultSearch.appendChild(image);
    });
}
