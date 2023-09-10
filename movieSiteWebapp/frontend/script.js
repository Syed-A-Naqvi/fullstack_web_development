const API_LINK = `http://127.0.0.1:3000/api/movies`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'http://127.0.0.1:3000/api/search';

const movielist = document.getElementById('movie-list');
const form = document.getElementById('form');
const search = document.getElementById('query');
const homeButton = document.getElementById('home-button')

function returnMovies(url){
        
    fetch(url)    
    .then(res => res.json())
    .then(function(data){
    
        console.log(data.results);
        data.results.forEach(element => {
            
            const div_card = document.createElement('div');
            div_card.classList.add('movie-card');

            const img = document.createElement('img');
            img.src = IMG_PATH + element.poster_path;
            img.classList.add('thumbnail');

            const title = document.createElement('h3');
            title.style.margin='opx';
            title.innerHTML = element.title;

            div_card.appendChild(img);
            div_card.appendChild(title);
            movielist.appendChild(div_card);
        
        })
    })

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    movielist.innerHTML = "";

    const searchItem = search.value;

    if(searchItem){
        returnMovies(`${SEARCH_API}?query=${searchItem}`);
        searchItem.value = "";
    }

});

returnMovies(API_LINK);