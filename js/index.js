const requestURL = '../json/documentaries.json';

async function fetchMoviesJson(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies =>{
    for (let index = 0; index < movies.documentaries.length; index++)
    {
        const moviesSection = document.getElementById('movieSection');
        
        let id = movies.documentaries[index].id;
        let poster = movies.documentaries[index].poster;
        let title = movies.documentaries[index].title;
        let year = movies.documentaries[index].year;
        let length = movies.documentaries[index].length;
        let director = movies.documentaries[index].director;
        let synopsis = movies.documentaries[index].synopsis;

        moviesSection.innerHTML += `
            <div class="card mb-4" style="width: 18rem;">
                <img src="${poster}" class="card-img-top" alt="documentary poster">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-title"><span class="h6">${year}</span> · ${length}</p>
                    <h6 class="card-title mb-4">${director}</h6>
                    <p class="card-title">${synopsis}</p>                   
                </div>
            </div>
        `
    }
})