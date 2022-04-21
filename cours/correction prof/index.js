window.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById("rechercher").addEventListener("click", () => {
        fetchGif();

        // avec async / await
        //fetchGifAsync();
    });
});

function fetchGif(apiKey = '87FVZSODBI') {
    let search =  document.getElementById('search').value || 'default';
    let limit =  document.getElementById('limit').value || 10;
    let resultSearch = document.getElementById('resultSearch');

    fetch(`https://g.tenor.com/v1/search?q=${search}&key=${apiKey}&limit=${limit}`)
        .then(response => response.json())
        .then(gifs => {
            console.log(gifs);
            gifs.results.forEach(gif => {
                const image = document.createElement('img');
                image.src = `${gif.itemurl}.gif`;
                resultSearch.appendChild(image);
            });
        })
        .catch(err => console.log(err));
}

async function fetchGifAsync(apiKey = '87FVZSODBI') {
    let search =  document.getElementById('search').value || 'default';
    let limit =  document.getElementById('limit').value || 10;
    let resultSearch = document.getElementById('resultSearch');

    const gifs = await fetch(`https://g.tenor.com/v1/search?q=${search}&key=${apiKey}&limit=${limit}`)
        .then(response => response.json())
        .then(gifs => gifs.results);

    gifs.forEach(gif => {
        const image = document.createElement('img');
        image.src = `${gif.itemurl}.gif`;
        resultSearch.appendChild(image);
    });
}
