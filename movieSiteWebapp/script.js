const API_LINK = 'https://www.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f9d40e502f6e051fd1b2ebbbd27f8435=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://www.themoviedb.org/3/search/movie?&api_key=f9d40e502f6e051fd1b2ebbbd27f8435=';

const movielist = document.getElementById('movielist');
const form = document.getElementById('form');
const search = document.getElementById('query');

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

            div_card.appendChild(img);
            div_card.appendChild(title);
            main.appendChild(div_card);
        
        })
    })

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = "";

    const searchItem = search.ariaValueMax;

    if(searchItem){
        returnMovies(SEARCH_API + searchItem);
        searchItem.valuel = "";
    }

});

returnMovies(API_LINK);